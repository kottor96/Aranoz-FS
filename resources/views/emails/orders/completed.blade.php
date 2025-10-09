<x-mail::message>
# Commande #{{ $order->id }} complétée !

Bonjour {{ $order->user->name }},

Votre commande a été complétée avec succès. Voici les détails :

@foreach($order->orderItems as $item)
- {{ $item->product->name }} x {{ $item->quantity }} → {{ $item->price }} €
@endforeach

**Total :** {{ $order->total_price }} €

<x-mail::button :url="route('orders.show', $order->id)">
Voir ma commande
</x-mail::button>

Merci,<br>
{{ config('app.name') }}
</x-mail::message>
