"use client";
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const { login } = useAuth();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock login/signup
    login(formData);
  };

  return (
    <div className="max-w-md mx-auto p-8 border border-border">
      <h2 className="text-2xl font-serif mb-6">{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <Input 
            placeholder="Name" 
            value={formData.name} 
            onChange={(e) => setFormData({...formData, name: e.target.value})} 
          />
        )}
        <Input 
          placeholder="Email" 
          type="email"
          value={formData.email} 
          onChange={(e) => setFormData({...formData, email: e.target.value})} 
        />
        <Input 
          placeholder="Phone" 
          value={formData.phone} 
          onChange={(e) => setFormData({...formData, phone: e.target.value})} 
        />
        <Button type="submit" className="w-full">{isLogin ? 'Login' : 'Sign Up'}</Button>
      </form>
      <p className="mt-4 text-center text-sm">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button onClick={() => setIsLogin(!isLogin)} className="ml-1 text-primary underline">
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
    </div>
  );
}
