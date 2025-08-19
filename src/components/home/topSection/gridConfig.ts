export const gridConfig1 = [

  {
    id: "1",
    type: "image" as const,
    content: "/images/wavelength-control-adjustment.jpg",
    alt: "Wavelength control adjustment",
  },
  
  { id: "2", type: "text" as const, styledContent: [
      { text: "93% of ", type: "text", style: { fontWeight: "bold", fontSize: "clamp(1rem, 2vw, 2.3rem)" } },
      { type: "lineBreak" }, // Add a line break
      { text: " our innovations exceed conventional paradigm parameters", 
        type: "text", 
        style: { display: "block", fontSize: "clamp(0.5rem, 1vw, 1.2rem)", lineHeight: "clamp(1rem, 1.7vw, 1.5rem)" } },
    ], },
  { id: "3", type: "empty" as const },
  {
    id: "4",
    type: "empty" as const,

  },
  { id: "5", type: "text" as const, styledContent: [
      { text: "Leading in", type: "text", style: { display: "block", fontSize: "clamp(0.5rem, 1vw, 1.2rem)", lineHeight: "clamp(1rem, 1.7vw, 1.5rem)" } },
      { text: "12", 
        type: "text", 
         style: { fontWeight: "bold", fontSize: "clamp(1rem, 2vw, 2.3rem)" } },
    { text: "undefined metrics", type: "text", style: { display: "block", fontSize: "clamp(0.5rem, 1vw, 1.2rem)", lineHeight: "clamp(1rem, 1.7vw, 1.5rem)" } },] },
  {
    id: "6",
    type: "image" as const,
    content: "/images/hypoxium-resonance-dynamo.jpg",
    alt: "Hypoxium resonance dynamo",
  },

  {
    id: "7",
    type: "image" as const,
    content: "/images/matt-with-szienoscope.jpg",
    alt: "Matt with Szienoscope",
  },
    { id: "8", type: "text" as const, styledContent: [
      { text: "ranked", type: "text", style: { display: "block", fontSize: "clamp(0.5rem, 1vw, 1.2rem)", lineHeight: "clamp(1rem, 1.7vw, 1.5rem)" } },
      { text: "#1", 
        type: "text", 
         style: { fontWeight: "bold", fontSize: "clamp(1rem, 2vw, 2.3rem)" } },
    { text: "in theoretical excellence", type: "text", style: { display: "block", fontSize: "clamp(0.5rem, 1vw, 1.2rem)", lineHeight: "clamp(1rem, 1.7vw, 1.5rem)" } },] },
  { id: "9", type: "empty" as const },
];