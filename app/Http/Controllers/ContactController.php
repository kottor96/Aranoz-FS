<?php

namespace App\Http\Controllers;

use App\Models\contact;
use App\Models\Country;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contact = contact::first();
        $countries = Country::all();
        return Inertia::render('Admin/Categorie/Contact',compact('contact','countries'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(contact $contact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(contact $contact)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Contact $contact)
    {
        
        $request->validate([
            'street' => 'required|string|max:255',
            'state' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'zip_code' => 'required|string|max:20',
            'country_code' => 'required|string|max:10',
            'number' => 'required|string|max:50',
            'email' => 'required|email|max:255',
            'phone_number' => 'required|string|max:50',
        ]);

        Contact::first()->update([
            'street' => $request->street,
            'state' => $request->state,
            'city' => $request->city,
            'zip_code' => $request->zip_code,
            'country_code' => $request->country_code,
            'number' => $request->number,
            'email' => $request->email,
            'phone_number' => $request->phone_number,
        ]);

        return redirect()->back()->with('success', 'Contact mis à jour avec succès.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(contact $contact)
    {
        //
    }
}
