"use client";
import { useAuth } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import { Button } from '../../components/ui/button';

export default function ProfilePage() {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <main className="min-h-screen pt-12 px-12 pb-24 bg-background max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-light mb-12">Login / Sign Up</h1>
        <AuthForm />
      </main>
    );
  }

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
            <Button variant="ghost" className="w-full justify-start" onClick={logout}>Logout</Button>
        </aside>
        <section className="p-8 border border-border space-y-6">
            <h2 className="text-xl font-light">Personal Information</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
            </div>
        </section>
      </div>
    </main>
  );
}
