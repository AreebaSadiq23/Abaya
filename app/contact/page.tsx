export default function ContactPage() {
  return (
    <main className="min-h-screen pt-12 px-6 md:px-12 pb-24 bg-background max-w-2xl mx-auto space-y-6 md:space-y-8">
      <h1 className="text-3xl md:text-4xl font-serif font-light">Contact Us</h1>
      <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
        We would love to hear from you. Whether you have a question about our abayas, your order, or just want to share your thoughts, please reach out.
      </p>
      <div className="space-y-6">
        <input className="w-full bg-transparent border-b border-border p-3 focus:border-primary focus:outline-none transition-colors" placeholder="Full Name" />
        <input className="w-full bg-transparent border-b border-border p-3 focus:border-primary focus:outline-none transition-colors" placeholder="Email Address" />
        <textarea className="w-full bg-transparent border-b border-border p-3 h-32 focus:border-primary focus:outline-none transition-colors" placeholder="Your Message" />
        <button className="w-full md:w-auto bg-foreground text-background px-8 py-4 uppercase tracking-widest text-sm hover:bg-foreground/90 transition-colors">Send Message</button>
      </div>
    </main>
  );
}
