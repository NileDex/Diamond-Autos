const photos = [
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerKK88gScAlML7cjtU5ZS0hLHKKnLKSz04zIdYDmhTqqkKnCiTLNAg4cTdv2hrVRRzYv2GFPflgnPOMcMwCLkcWeRH3aT0aq8JrTna4cq9viu-knHvftq9nJL4g_tA2vq_JJlKk=w397-h298-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAweri7x3_pjXGtn10H2S0Pw7F73VCVVGXXOxNOQJuhjIOKXP10zP8cwyNHr5ldOJBcmOCYxq1pdO9wyVOf2KJWNodt3ZiSPpyEdLDXf8IUsXkK7IvZ1cM71Y12MT27NAfI8qgJHX7dg=w397-h298-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAweq6dY-3LYaP84x2_ZrXG0nszV1ZfV3vNpFddhFdsBR7aKshrRcSyj4HhtGpyf2yINimeClp1pvfmvwAmQsoXvxlLcM80Mqi6LlyL4wtcHqIeJy5WJuVp-NPf3-JUD4n3Bn3kU9y=w397-h298-k-no",
  "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=r8XPtrz7ywIfVv9igt0ccw&cb_client=maps_sv.tactile.gps&w=224&h=298&yaw=306.32593&pitch=0&thumbfov=100",
];

export function Gallery() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Shop</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Take a look at our professional facility in San Jose.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {photos.map((photo, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl bg-slate-200 aspect-[4/3]">
              <img
                src={photo}
                alt={`Diamond Auto Repair Shop ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
