import { usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Checkout({}) {
    // default billing values from user's message
    const {auth} = usePage().props    
    const [billing, setBilling] = useState({
        firstname: "",
        lastname: "",
        company: "",
        phone: "Number",
        email: "nexagray@gmail.com",
        country: "Belgium",
        address: "",
        city: "",
        postcode: "",
    });
    const cart = auth.panier
    const [coupon, setCoupon] = useState("");
    const [discount, setDiscount] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState("paypal"); // default paypal
    const [loading, setLoading] = useState(false);

    const totalPrice = cart.reduce((acc, item) => acc + (item.product.discountPrice || item.product.price) * item.quantity, 0);
    const finalPrice = totalPrice * (1 - discount);

    const applyCoupon = () => {
        // Exemple simple : PROMO10 = 10% ; PROMO50 = 50€ off (fix)
        if (!coupon) {
        return alert("Entre un code coupon.");
        }

        if (coupon === "PROMO10") {
            setDiscount(0.1);
            return alert("Coupon PROMO10 appliqué — 10% de réduction !");
        }

        if (coupon === "PROMO50") {
        // traduction en pourcentage approximatif si on veut un montant fixe :
        const pct = totalPrice > 0 ? Math.min(1, 50 / totalPrice) : 0;
        setDiscount(pct);
        return alert("Coupon PROMO50 appliqué — 50€ de réduction (ou équivalent) !");
        }

        setDiscount(0);
        alert("Coupon invalide.");
    };

  const validateBilling = () => {
    const required = ["firstname", "lastname", "phone", "email", "address", "city", "postcode"];
    for (const key of required) {
      if (!billing[key] || billing[key].toString().trim() === "") {
        return { ok: false, missing: key };
      }
    }
    return { ok: true };
  };

  const placeOrder = () => {
    const v = validateBilling();
    if (!v.ok) {
      return alert(`Veuillez remplir : ${v.missing}`);
    }

    setLoading(true);

    // Fake handling (no background jobs or real redirects)
    setTimeout(() => {
      setLoading(false);
      if (paymentMethod === "paypal") {
        // Simuler redirection vers PayPal
        alert(
          `FAKE: redirection vers PayPal\n\nMontant à payer : ${finalPrice.toFixed(
            2
          )} €\nEmail : ${billing.email}`
        );
        // ici tu pourrais router vers une page /api/paypal/create-payment si réel
      } else if (paymentMethod === "check") {
        // Simuler instructions pour paiement par chèque
        alert(
          `COMMANDE PLACÉE (fake) — Paiement par chèque\n\nMontant : ${finalPrice.toFixed(
            2
          )} €\nEnvoyez un chèque à :\nNom: TonEntreprise\nAdresse: ${billing.address}, ${billing.postcode} ${billing.city}, ${billing.country}`
        );
      } else {
        alert("Moyen de paiement inconnu.");
      }
    }, 700);
  };
  
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      {/* Billing + Payment */}
      <div className="flex-1 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Billing Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">First Name</label>
            <input
              type="text"
              value={billing.firstname}
              onChange={(e) => setBilling({ ...billing, firstname: e.target.value })}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1">Last Name</label>
            <input
              type="text"
              value={billing.lastname}
              onChange={(e) => setBilling({ ...billing, lastname: e.target.value })}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1">Company</label>
            <input
              type="text"
              value={billing.company}
              onChange={(e) => setBilling({ ...billing, company: e.target.value })}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1">Phone Number</label>
            <input
              type="text"
              value={billing.phone}
              onChange={(e) => setBilling({ ...billing, phone: e.target.value })}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              value={billing.email}
              onChange={(e) => setBilling({ ...billing, email: e.target.value })}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1">Address</label>
            <input
              type="text"
              value={billing.address}
              onChange={(e) => setBilling({ ...billing, address: e.target.value })}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1">City</label>
            <input
              type="text"
              value={billing.city}
              onChange={(e) => setBilling({ ...billing, city: e.target.value })}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1">Postcode / ZIP</label>
            <input
              type="text"
              value={billing.postcode}
              onChange={(e) => setBilling({ ...billing, postcode: e.target.value })}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1">Country</label>
            <select
              value={billing.country}
              onChange={(e) => setBilling({ ...billing, country: e.target.value })}
              className="w-full border rounded px-3 py-2"
            >
              <option>Belgium</option>
              <option>France</option>
              <option>Germany</option>
              <option>Netherlands</option>
            </select>
          </div>
        </div>

        {/* Payment method */}
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Payment method</h3>

          <label className="flex items-center gap-3 mb-2">
            <input
              type="radio"
              name="payment"
              value="paypal"
              checked={paymentMethod === "paypal"}
              onChange={() => setPaymentMethod("paypal")}
            />
            <span>PayPal</span>
          </label>

          <label className="flex items-center gap-3 mb-2">
            <input
              type="radio"
              name="payment"
              value="check"
              checked={paymentMethod === "check"}
              onChange={() => setPaymentMethod("check")}
            />
            <span>Check payment (fake)</span>
          </label>

          <div className="mt-3 text-sm text-gray-600">
            <p>
              PayPal: simulation de redirection. <br />
              Check payment: instructions fictives affichées après la commande.
            </p>
          </div>
        </div>
      </div>

      {/* Order Summary + Coupon */}
      <div className="w-full md:w-1/3 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>

        <div className="mb-4 space-y-3">
            {cart.length === 0 && <div className="text-sm text-gray-500">Ton panier est vide.</div>}

            {cart.map((item) => (
                <div key={item.id || item.name} className="flex justify-between items-center">
                    <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-gray-500">x{item.quantity}</div>
                    </div>
                    <div className="w-32 text-right font-semibold">
                        ${(item.product.discountPrice || item.product.price) * item.quantity}
                    </div>
                </div>
            ))}

            <hr />

            <div className="flex justify-between">
                <span>Sous‑total</span>
                <span>{totalPrice.toFixed(2)} €</span>
            </div>

          <div className="flex justify-between">
            <span>Remise</span>
            <span>{(totalPrice - finalPrice).toFixed(2)} €</span>
          </div>

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>{finalPrice.toFixed(2)} €</span>
          </div>
        </div>

        {/* Coupon */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Coupon code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            className="w-full border rounded px-3 py-2 mb-2"
          />
          <button
            onClick={applyCoupon}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            type="button"
          >
            Apply Coupon
          </button>
        </div>

        {/* Payment summary & place order */}
        <div className="mt-6">
          <div className="text-sm text-gray-700 mb-3">
            <div>Moyen de paiement choisi: <strong>{paymentMethod === "paypal" ? "PayPal" : "Check payment"}</strong></div>
          </div>

          <button
            onClick={placeOrder}
            disabled={loading}
            className={`w-full py-3 rounded text-white ${loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"}`}
          >
            {loading ? "Traitement..." : `Place Order — ${finalPrice.toFixed(2)} €`}
          </button>
        </div>
      </div>
    </div>
  );
}
