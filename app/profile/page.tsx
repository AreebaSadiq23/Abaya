export default function ProfilePage() {
  return (
    <main className="min-h-screen pt-12 px-12 pb-24 bg-background max-w-4xl mx-auto">
      <h1 className="text-4xl font-serif font-light mb-12">My Profile</h1>
      <div className="grid grid-cols-[250px,1fr] gap-12">
        <aside className="space-y-4 text-sm uppercase tracking-widest text-foreground/70">
            <p className="text-foreground">My Profile</p>
            <p>My Orders</p>
            <p>Wishlist</p>
            <p>Addresses</p>
            <p>Payment Methods</p>
            <p>Settings</p>
            <p>Logout</p>
        </aside>
        <section className="p-8 border border-border space-y-6">
            <h2 className="text-xl font-light">Personal Information</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
                <p>Name: Areeba Sadiq</p>
                <p>Email: areeba@example.com</p>
                <p>Phone: +92 300 1234567</p>
            </div>
        </section>
      </div>
    </main>
  );
}
