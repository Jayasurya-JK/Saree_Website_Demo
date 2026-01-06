export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-brand-maroon text-brand-ivory">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">
            Rooted in Tradition
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Experience the elegance of handcrafted sarees that celebrate heritage and timeless beauty
          </p>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl text-center mb-12 text-brand-charcoal">
            Our Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-lg shadow-sm">
              <h3 className="font-serif text-2xl mb-4 text-brand-maroon">Silk</h3>
              <p className="text-brand-charcoal">
                Luxurious silk sarees woven with intricate patterns and rich textures
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-sm">
              <h3 className="font-serif text-2xl mb-4 text-brand-green">Cotton</h3>
              <p className="text-brand-charcoal">
                Comfortable and breathable cotton sarees perfect for everyday elegance
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-sm">
              <h3 className="font-serif text-2xl mb-4 text-brand-gold">Handloom</h3>
              <p className="text-brand-charcoal">
                Traditional handloom sarees crafted by skilled artisans
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Craft & Heritage Section */}
      <section className="py-16 px-4 bg-brand-green text-brand-ivory">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl mb-6">Craft & Heritage</h2>
          <p className="text-lg opacity-90 leading-relaxed">
            Every saree in our collection tells a story of dedication, skill, and cultural heritage. 
            Our artisans employ time-honored techniques passed down through generations, creating 
            masterpieces that honor tradition while embracing contemporary elegance.
          </p>
        </div>
      </section>

      {/* Featured Sarees */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl text-center mb-12 text-brand-charcoal">
            Featured Sarees
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-brand-maroon/20 to-brand-gold/20"></div>
                <div className="p-6">
                  <h3 className="font-serif text-xl mb-2 text-brand-charcoal">
                    Featured Saree {item}
                  </h3>
                  <p className="text-brand-charcoal/70 mb-4">
                    Exquisite craftsmanship and timeless design
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Legacy */}
      <section className="py-16 px-4 bg-brand-ivory">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl mb-6 text-brand-charcoal">
            Trust & Legacy
          </h2>
          <p className="text-lg text-brand-charcoal leading-relaxed mb-8">
            For generations, we have been committed to preserving the art of saree making 
            while ensuring the highest quality standards. Our legacy is built on trust, 
            authenticity, and a passion for excellence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="font-serif text-3xl text-brand-gold mb-2">50+</div>
              <p className="text-brand-charcoal">Years of Heritage</p>
            </div>
            <div>
              <div className="font-serif text-3xl text-brand-gold mb-2">1000+</div>
              <p className="text-brand-charcoal">Happy Customers</p>
            </div>
            <div>
              <div className="font-serif text-3xl text-brand-gold mb-2">100%</div>
              <p className="text-brand-charcoal">Authentic Craftsmanship</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
