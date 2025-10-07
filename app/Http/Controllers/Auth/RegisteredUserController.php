<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Avatar;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
         $request->validate([
            'userName' => 'required|string|max:255',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'subscribe' => 'sometimes|boolean',
            'imageFile' => 'nullable|image|max:2048', // max 2MB
            'imageUrl' => 'nullable|url|max:1024',
        ]);

        // Création de l'avatar si fourni
        $avatarId = null;
        if ($request->hasFile('imageFile')) {
            $path = $request->file('imageFile')->store('avatars', 'public');
            $avatar = Avatar::create([
                'image' => $path,
            ]);
            $avatarId = $avatar->id;
        } elseif ($request->imageUrl) {
            $avatar = Avatar::create([
                'image' => $request->imageUrl,
            ]);
            $avatarId = $avatar->id;
        }

        // Création de l'utilisateur avec avatar_id
        $user = User::create([
            'name' => $request->userName,
            'password' => Hash::make($request->password),
            'avatar_id' => $avatarId,
            'role_id' => 1, 
        ]);


        event(new Registered($user));

        Auth::login($user);

        return redirect(route('home', absolute: false));
    }
}
