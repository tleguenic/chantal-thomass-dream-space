const BrandStory = () => {
  return (
    <section id="univers" className="py-32 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <p className="text-sm font-sans tracking-[0.3em] text-primary uppercase">
              L'Esprit de la Marque
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
              Une vision audacieuse de la
              <span className="text-gradient-rose"> féminité</span>
            </h2>
            <div className="space-y-6 text-muted-foreground font-sans leading-relaxed">
              <p>
                Depuis 1975, Chantal Thomass incarne l'élégance parisienne avec 
                une touche d'impertinence. Pionnière de la lingerie de luxe, elle 
                a révolutionné le dessous féminin en le transformant en véritable 
                objet de désir.
              </p>
              <p>
                Le noir et rose signature, la dentelle délicate, les nœuds précieux... 
                Chaque création est une invitation à la séduction, un hommage à la 
                femme qui ose affirmer sa sensualité.
              </p>
            </div>
            <div className="pt-4">
              <a
                href="#collections"
                className="inline-flex items-center gap-3 text-primary font-sans text-sm tracking-widest uppercase group"
              >
                Découvrir l'histoire
                <span className="w-8 h-[1px] bg-primary transition-all duration-300 group-hover:w-12" />
              </a>
            </div>
          </div>

          {/* Right Content - Decorative */}
          <div className="relative">
            <div className="aspect-[3/4] bg-card border border-border overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="w-20 h-20 mx-auto mb-6 border border-primary rounded-full flex items-center justify-center">
                    <span className="font-serif text-3xl text-primary">CT</span>
                  </div>
                  <p className="font-serif text-2xl text-foreground italic mb-2">
                    "La lingerie, c'est l'armure secrète de la femme"
                  </p>
                  <p className="text-sm text-muted-foreground tracking-widest uppercase mt-4">
                    — Chantal Thomass
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
