import { usePage, router } from "@inertiajs/react";
import { useState } from "react";

export default function Checkout() {
  const { auth } = usePage().props;

  const [billing, setBilling] = useState({
    firstname: "",
    lastname: "",
    company: "",
    phone: "",
    email: auth.user?.email || "",
    country: "Belgium",
    address: "",
    city: "",
    postcode: "",
  });

  const cart = auth.panier || [];
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("paypal");
  const [loading, setLoading] = useState(false);

  const totalPrice = cart.reduce(
    (acc, item) => acc + (item.product.discountPrice || item.product.price) * item.quantity,
    0
  );

  const finalPrice = totalPrice * (1 - discount);

  const applyCoupon = () => {
    if (!coupon) return alert("Entre un code coupon.");

    if (coupon === "PROMO10") {
      setDiscount(0.1);
      return alert("Coupon PROMO10 appliqué — 10% de réduction !");
    }

    if (coupon === "PROMO50") {
      const pct = totalPrice > 0 ? Math.min(1, 50 / totalPrice) : 0;
      setDiscount(pct);
      return alert("Coupon PROMO50 appliqué — 50€ de réduction !");
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
    if (!v.ok) return alert(`Veuillez remplir : ${v.missing}`);

    if (cart.length === 0) return alert("Ton panier est vide.");

    setLoading(true);

    // Mapper les champs côté Laravel
    const billingData = {
      first_name: billing.firstname,
      last_name: billing.lastname,
      company: billing.company,
      phone_number: billing.phone,
      email: billing.email,
      country: billing.country,
      adress: billing.address,
      city: billing.city,
      zip: billing.postcode,
    };

    router.post(
      route("order.store"),
      { billing: billingData, paymentMethod, coupon },
      {
        onSuccess: () => {
          setLoading(false);
          router.get(route("checkout.success"));
        },
        onError: (errors) => {
          setLoading(false);
          console.error(errors);
          alert("Une erreur est survenue lors de la commande.");
        },
      }
    );
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      {/* Billing + Payment */}
      <div className="flex-1 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Billing Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: "First Name", key: "firstname" },
            { label: "Last Name", key: "lastname" },
            { label: "Company", key: "company" },
            { label: "Phone Number", key: "phone" },
            { label: "Email", key: "email" },
            { label: "Address", key: "address" },
            { label: "City", key: "city" },
            { label: "Postcode / ZIP", key: "postcode" },
          ].map((field, idx) => (
            <div key={idx} className={field.key === "company" || field.key === "address" ? "md:col-span-2" : ""}>
              <label className="block mb-1">{field.label}</label>
              <input
                type={field.key === "email" ? "email" : "text"}
                value={billing[field.key]}
                onChange={(e) => setBilling({ ...billing, [field.key]: e.target.value })}
                className="w-full border rounded px-3 py-2"
              />
            </div>
          ))}
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

        <div className="mt-6">
          <h3 className="font-semibold mb-2">Payment method</h3>
          {["paypal", "check"].map((method) => (
            <label key={method} className="flex items-center gap-3 mb-2">
              <input
                type="radio"
                name="payment"
                value={method}
                checked={paymentMethod === method}
                onChange={() => setPaymentMethod(method)}
              />
              <span>{method === "paypal" ? "PayPal" : "Check payment (fake)"}</span>
            </label>
          ))}
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
            <div key={item.id} className="flex justify-between items-center">
              <div>
                <div className="font-medium">{item.product.name}</div>
                <div className="text-sm text-gray-500">x{item.quantity}</div>
              </div>
              <div className="w-32 text-right font-semibold">
                €{((item.product.discountPrice || item.product.price) * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
          <hr />
          <div className="flex justify-between">
            <span>Sous‑total</span>
            <span>€{totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Remise</span>
            <span>€{(totalPrice - finalPrice).toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>€{finalPrice.toFixed(2)}</span>
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

        {/* Place Order */}
        <div className="mt-6">
          <div className="text-sm text-gray-700 mb-3">
            <div>
              Moyen de paiement choisi:{" "}
              <strong>{paymentMethod === "paypal" ? "PayPal" : "Check payment"}</strong>
            </div>
          </div>
          <button
            onClick={placeOrder}
            disabled={loading}
            className={`w-full py-3 rounded text-white ${loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"}`}
          >
            {loading ? "Traitement..." : `Place Order — €${finalPrice.toFixed(2)}`}
          </button>
        </div>
      </div>
    </div>
  );
}
