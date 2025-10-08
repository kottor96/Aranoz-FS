<?php

namespace App\Http\Controllers;

use App\Models\Avatar;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;


class UserController extends Controller
{
    // 🔹 Liste des utilisateurs
    public function index()
    {
        $users = User::with('avatar', 'role')->get();
        return Inertia::render('Admin/User/Index', compact('users'));
    }

    // 🔹 Formulaire édition utilisateur
    public function edit($id)
    {
        $user = User::with(['avatar', 'role'])->findOrFail($id);
        $roles = Role::all();
        return Inertia::render('Admin/User/Edit', compact('user', 'roles'));
    }

    // 🔹 Mettre à jour utilisateur
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        // Validation
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email,' . $user->id,
            'role_id' => 'required|exists:roles,id',
            'image' => 'nullable|image',
            'image_url' => 'nullable|url',
        ]);

        // 🔹 Mise à jour des infos utilisateur
        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'role_id' => $request->role_id,
        ]);

        // 🔹 Gestion de l'avatar
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $filename = Str::slug($user->name) . '_' . time() . '.' . $file->getClientOriginalExtension();

            // Stocke le fichier dans storage/app/public/avatars
            $file->storeAs('avatars', $filename, 'public');

            // On met le chemin complet public dans la DB
            $avatarData = [
                'image' => '/storage/avatars/' . $filename,
                'type' => 'file',
            ];
        } elseif ($request->filled('image_url')) {
            $avatarData = [
                'image' => $request->image_url,
                'type' => 'url',
            ];
        }

        // Update ou create avatar
        if ($user->avatar_id) {
            $user->avatar->update($avatarData);
        } else {
            $avatar = Avatar::create($avatarData);
            $user->update(['avatar_id' => $avatar->id]);
        }

        return redirect()->route('admin.users.index')->with('success', 'Utilisateur mis à jour avec succès.');
    }

    // 🔹 Supprimer utilisateur
    public function destroy($id)
    {
        $user = User::findOrFail($id);

        // Supprimer avatar si c'est un fichier
        if ($user->avatar && $user->avatar->type === 'file' && Storage::exists('public/avatars/' . $user->avatar->image)) {
            Storage::delete('public/avatars/' . $user->avatar->image);
        }

        $user->delete();

        return back()->with('success', 'Utilisateur supprimé.');
    }
}
