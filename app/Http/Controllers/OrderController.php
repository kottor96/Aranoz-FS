<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index2($numero = null)
    {
        // Si aucun numéro n'est fourni, ne renvoie aucune commande
        $orders = [];

        if ($numero) {
            $orders = Order::where('order_number', $numero)
              ->with('orderItems')
              ->first();
        }

        return Inertia::render('shop/TrackOrder', compact('orders','numeroRecherche'??''));
    }

    public function index(){
        $orders = Order::with('orderItems','user')->get();
        return Inertia::render('Admin/Order/Index',compact('orders'));
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
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
    }
}
