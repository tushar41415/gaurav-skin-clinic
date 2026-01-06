import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "bootstrap";


/* ================== CATEGORIES ================== */
const categories = [
  { id: "all", name: "All Treatments", icon: "bi-stars" },
  { id: "hair-treatments", name: "Hair Treatments", icon: "bi-scissors" },
  { id: "skin-care", name: "Skin Care", icon: "bi-droplet" },
  { id: "hair-removal", name: "Hair Removal", icon: "bi-lightning-charge" },
  { id: "permanent-makeup", name: "Permanent Makeup", icon: "bi-brush" },
  { id: "eye-brow", name: "Eye & Brow", icon: "bi-eye" },
  { id: "anti-aging", name: "Anti-Aging", icon: "bi-star" },
  { id: "body-contouring", name: "Body Contouring", icon: "bi-fire" },
  { id: "cosmetic-surgery", name: "Cosmetic Surgery", icon: "bi-award" },
];

/* ================== TREATMENTS (FULL DATA) ================== */
const treatments = [
  { id: "hair-loss-treatment", title: "Hair Loss Treatment", description: "Advanced therapies to prevent hair loss and strengthen hair follicles for healthier, thicker growth.", category: "hair-treatments", icon: "bi-scissors", benefits: ["Stops hair fall", "Strengthens follicles", "Promotes regrowth", "Natural results"], duration: "45-60 min" },
  { id: "prp-therapy", title: "PRP Therapy", description: "Platelet-Rich Plasma treatment using your body's natural healing factors for hair regrowth.", category: "hair-treatments", icon: "bi-droplet", benefits: ["100% natural", "Stimulates growth", "No downtime", "Long-lasting"], duration: "60 min" },
  { id: "hair-transplant", title: "Hair Transplants", description: "Permanent hair restoration using advanced follicular unit transplantation techniques.", category: "hair-treatments", icon: "bi-scissors", benefits: ["Permanent results", "Natural hairline", "Minimal scarring", "High success rate"], duration: "4-8 hours" },
  { id: "fue-transplant", title: "FUE Hair Transplant", description: "Follicular Unit Extraction for natural-looking, scar-free hair restoration.", category: "hair-treatments", icon: "bi-circle-fill", benefits: ["No linear scar", "Quick recovery", "Natural density", "Precise placement"], duration: "4-6 hours" },
  { id: "artas-transplant", title: "ARTAS Hair Transplant", description: "Robotic-assisted precision hair transplantation for optimal graft survival.", category: "hair-treatments", icon: "bi-gem", benefits: ["Robotic precision", "Consistent results", "Faster procedure", "Minimal trauma"], duration: "4-6 hours" },
  { id: "neograft-removal", title: "NeoGraft Hair Removal", description: "Advanced automated hair extraction for efficient and comfortable transplantation.", category: "hair-treatments", icon: "bi-lightning-charge", benefits: ["Automated precision", "Less discomfort", "Natural results", "Quick healing"], duration: "3-5 hours" },
  { id: "beard-transplant", title: "Beard Hair Transplant", description: "Restore or enhance facial hair with natural-looking beard transplantation.", category: "hair-treatments", icon: "bi-scissors", benefits: ["Fuller beard", "Custom design", "Permanent", "Natural growth"], duration: "3-5 hours" },
  { id: "scalp-micropigmentation", title: "Scalp Micropigmentation", description: "Non-surgical treatment that creates the appearance of fuller hair through micro-pigmentation.", category: "hair-treatments", icon: "bi-brush", benefits: ["Instant results", "Non-surgical", "Low maintenance", "Natural look"], duration: "2-4 hours" },
  { id: "natural-restoration", title: "Natural Hair Restoration", description: "Holistic approach combining treatments for comprehensive hair health and regrowth.", category: "hair-treatments", icon: "bi-droplet", benefits: ["Holistic care", "Multiple therapies", "Long-term health", "Custom plan"], duration: "Varies" },
  { id: "hair-reconstruction", title: "Hair Reconstruction", description: "Intensive repair treatment for damaged hair, restoring strength and vitality.", category: "hair-treatments", icon: "bi-star", benefits: ["Repairs damage", "Restores shine", "Strengthens", "Deep conditioning"], duration: "60-90 min" },
  { id: "hair-extensions", title: "Hair Extensions", description: "Premium quality extensions for instant length, volume, and versatility.", category: "hair-treatments", icon: "bi-stars", benefits: ["Instant length", "Added volume", "Various methods", "Natural blend"], duration: "2-4 hours" },
  { id: "hair-simulator", title: "Hair Simulator", description: "Advanced visualization technology to preview your potential hair restoration results.", category: "hair-treatments", icon: "bi-eye", benefits: ["Visual preview", "Realistic results", "Plan treatment", "Set expectations"], duration: "30 min" },
  { id: "dandruff-treatment", title: "Dandruff & Lice Treatments", description: "Effective solutions for scalp conditions including dandruff and lice removal.", category: "hair-treatments", icon: "bi-snow", benefits: ["Deep cleansing", "Scalp health", "Itch relief", "Prevention"], duration: "45 min" },
  { id: "hair-grafting", title: "Hair Grafting", description: "Precision grafting technique for natural hair density and coverage.", category: "hair-treatments", icon: "bi-scissors", benefits: ["Dense coverage", "Natural pattern", "Permanent", "Custom design"], duration: "4-8 hours" },
  { id: "dhi-transplant", title: "Direct Hair Implantation", description: "Advanced DHI technique for precise implantation without recipient site incisions.", category: "hair-treatments", icon: "bi-gem", benefits: ["No incisions", "Higher density", "Natural angle", "Quick recovery"], duration: "5-8 hours" },

  // Skin Care
  { id: "hydrafacial", title: "HydraFacial MD Treatment", description: "Multi-step facial treatment that cleanses, exfoliates, and hydrates for radiant skin.", category: "skin-care", icon: "bi-droplet", benefits: ["Deep cleansing", "Hydration boost", "Instant glow", "No downtime"], duration: "45 min" },
  { id: "facial-treatment", title: "Facial Treatment", description: "Customized facial treatments tailored to your specific skin type and concerns.", category: "skin-care", icon: "bi-stars", benefits: ["Personalized care", "Deep cleansing", "Relaxing", "Visible results"], duration: "60 min" },
  { id: "dermaplaning", title: "Dermaplaning", description: "Gentle exfoliation technique that removes dead skin and peach fuzz for smoother skin.", category: "skin-care", icon: "bi-brush", benefits: ["Smooth texture", "Better absorption", "Instant results", "Painless"], duration: "30 min" },
  { id: "microdermabrasion", title: "Microdermabrasion", description: "Crystal or diamond-tip exfoliation for skin renewal and improved texture.", category: "skin-care", icon: "bi-gem", benefits: ["Skin renewal", "Reduces scars", "Even tone", "Collagen boost"], duration: "45 min" },
  { id: "chemical-peels", title: "Deep Peels", description: "Professional chemical peels for dramatic skin renewal and rejuvenation.", category: "skin-care", icon: "bi-droplet", benefits: ["Skin renewal", "Reduces wrinkles", "Even pigment", "Fresh glow"], duration: "30-60 min" },
  { id: "carbon-laser-peel", title: "Carbon Laser Peel", description: "Innovative laser treatment for deep pore cleansing and skin rejuvenation.", category: "skin-care", icon: "bi-lightning-charge", benefits: ["Pore reduction", "Oil control", "Instant glow", "Skin tightening"], duration: "45 min" },
  { id: "de-tan-treatment", title: "De-Tan Treatment", description: "Specialized treatment to remove tan and restore your natural skin tone.", category: "skin-care", icon: "bi-sun", benefits: ["Removes tan", "Even tone", "Brightening", "Nourishing"], duration: "45 min" },
  { id: "skin-polishing", title: "Skin Polishing", description: "Advanced exfoliation treatment for smooth, refined, and luminous skin.", category: "skin-care", icon: "bi-stars", benefits: ["Smooth texture", "Radiant glow", "Pore refinement", "Fresh look"], duration: "60 min" },
  { id: "skin-brightening", title: "Skin Brightening Treatment", description: "Targeted treatment to enhance skin radiance and achieve a luminous complexion.", category: "skin-care", icon: "bi-sun", benefits: ["Luminous glow", "Even tone", "Reduces dullness", "Youthful look"], duration: "60 min" },
  { id: "glutathione-therapy", title: "Glutathione Whitening Treatment", description: "IV therapy for skin lightening using powerful antioxidant glutathione.", category: "skin-care", icon: "bi-droplet", benefits: ["Skin lightening", "Antioxidant", "Even tone", "Detoxifying"], duration: "60-90 min" },
  { id: "iv-glutathione", title: "IV Glutathione Therapy", description: "Intravenous delivery of glutathione for maximum skin brightening benefits.", category: "skin-care", icon: "bi-heart", benefits: ["Maximum absorption", "Quick results", "Whole body", "Detox"], duration: "45-60 min" },
  { id: "pigmentation-treatment", title: "Pigmentation Treatment", description: "Advanced solutions for hyperpigmentation, dark spots, and uneven skin tone.", category: "skin-care", icon: "bi-circle-fill", benefits: ["Fades spots", "Even tone", "Clear skin", "Prevents new spots"], duration: "45 min" },
  { id: "melasma-treatment", title: "Melasma Treatment", description: "Specialized treatment protocol for stubborn melasma and hormonal pigmentation.", category: "skin-care", icon: "bi-moon", benefits: ["Reduces melasma", "Prevents return", "Even tone", "Safe approach"], duration: "60 min" },
  { id: "acne-treatment", title: "Acne Treatment", description: "Comprehensive acne solutions to clear breakouts and prevent scarring.", category: "skin-care", icon: "bi-stars", benefits: ["Clears acne", "Reduces oil", "Prevents scars", "Long-term control"], duration: "45 min" },
  { id: "scar-treatment", title: "Scar Treatment", description: "Advanced treatments to minimize and fade various types of scars.", category: "skin-care", icon: "bi-star", benefits: ["Fades scars", "Smooths texture", "Boosts collagen", "Multiple options"], duration: "30-60 min" },
  { id: "scar-camouflage", title: "Scar Camouflage", description: "Medical micropigmentation to blend scars with surrounding skin tone.", category: "skin-care", icon: "bi-brush", benefits: ["Conceals scars", "Natural match", "Permanent", "Confidence boost"], duration: "2-3 hours" },
  { id: "mole-removal", title: "Mole and Warts Removal", description: "Safe and effective removal of moles, warts, and skin tags.", category: "skin-care", icon: "bi-circle-fill", benefits: ["Quick procedure", "Minimal scarring", "Safe removal", "Immediate results"], duration: "15-30 min" },
  { id: "tattoo-removal", title: "Tattoo Removal", description: "Laser tattoo removal for safe and effective ink elimination.", category: "skin-care", icon: "bi-lightning-charge", benefits: ["Effective removal", "All colors", "Safe method", "Gradual fading"], duration: "15-45 min" },
  { id: "mesotherapy", title: "Mesotherapy", description: "Micro-injection therapy delivering vitamins and nutrients directly to skin.", category: "skin-care", icon: "bi-droplet", benefits: ["Deep nourishment", "Skin rejuvenation", "Targeted delivery", "Glow boost"], duration: "30-45 min" },
  { id: "sugarcane-hydrafacial", title: "Sugarcane HydraFacial", description: "Natural exfoliation using sugarcane-derived acids for gentle skin renewal.", category: "skin-care", icon: "bi-waves", benefits: ["Natural acids", "Gentle exfoliation", "Hydrating", "Eco-friendly"], duration: "45 min" },
  { id: "skin-lightening", title: "Skin Lightening Treatment", description: "Safe and effective treatments to achieve a lighter, more even complexion.", category: "skin-care", icon: "bi-sun", benefits: ["Lighter tone", "Even skin", "Safe methods", "Gradual results"], duration: "60 min" },
  { id: "skin-doctor", title: "Skin Doctor Consultation", description: "Expert dermatological consultation for personalized skin care recommendations.", category: "skin-care", icon: "bi-heart", benefits: ["Expert advice", "Diagnosis", "Custom plan", "Follow-up care"], duration: "30 min" },

  // Hair Removal
  { id: "laser-hair-removal", title: "Laser Hair Removal", description: "Advanced laser technology for permanent hair reduction on any body area.", category: "hair-removal", icon: "bi-lightning-charge", benefits: ["Permanent reduction", "All body areas", "Quick sessions", "Smooth skin"], duration: "15-60 min" },
  { id: "facial-hair-removal", title: "Facial Hair Removal", description: "Gentle and effective solutions for unwanted facial hair.", category: "hair-removal", icon: "bi-stars", benefits: ["Smooth face", "Precise", "Long-lasting", "Multiple methods"], duration: "15-30 min" },
  { id: "body-hair-removal", title: "Body Hair Removal", description: "Full body hair removal solutions for silky smooth skin.", category: "hair-removal", icon: "bi-waves", benefits: ["Full body", "Long-lasting", "Smooth skin", "Various methods"], duration: "60-120 min" },
  { id: "back-hair-removal", title: "Back Hair Removal", description: "Effective back hair removal for a clean, smooth appearance.", category: "hair-removal", icon: "bi-lightning-charge", benefits: ["Large area", "Smooth back", "Long-lasting", "Comfortable"], duration: "45-60 min" },
  { id: "chest-hair-removal", title: "Chest Hair Removal", description: "Professional chest hair removal for a groomed, polished look.", category: "hair-removal", icon: "bi-lightning-charge", benefits: ["Defined chest", "Smooth skin", "Long-lasting", "Athletic look"], duration: "30-45 min" },
  { id: "arm-hair-removal", title: "Arm Hair Removal", description: "Complete arm hair removal from shoulders to wrists.", category: "hair-removal", icon: "bi-stars", benefits: ["Smooth arms", "Full coverage", "Quick sessions", "Long-lasting"], duration: "20-30 min" },
  { id: "stomach-hair-removal", title: "Stomach Hair Removal", description: "Precise hair removal for a smooth, hair-free stomach area.", category: "hair-removal", icon: "bi-lightning-charge", benefits: ["Smooth stomach", "Beach ready", "Confidence", "Long-lasting"], duration: "20-30 min" },
  { id: "foot-hair-removal", title: "Foot Hair Removal", description: "Hair removal for feet and toes for a polished appearance.", category: "hair-removal", icon: "bi-stars", benefits: ["Neat feet", "Sandal ready", "Quick", "Long-lasting"], duration: "15 min" },
  { id: "lip-hair-removal", title: "Lip Hair Removal", description: "Gentle upper lip hair removal for a flawless face.", category: "hair-removal", icon: "bi-heart", benefits: ["Smooth lips", "Gentle", "Quick", "Precise"], duration: "10 min" },
  { id: "ear-hair-removal", title: "Ear Hair Removal", description: "Discreet ear hair removal for a well-groomed appearance.", category: "hair-removal", icon: "bi-circle-fill", benefits: ["Clean ears", "Groomed look", "Quick", "Comfortable"], duration: "10 min" },
  { id: "hairline-waxing", title: "Hairline Waxing", description: "Precision waxing to clean up and define your hairline.", category: "hair-removal", icon: "bi-scissors", benefits: ["Clean edges", "Defined line", "Neat look", "Quick"], duration: "15 min" },
  { id: "hair-threading", title: "Hair Threading", description: "Traditional threading technique for precise facial hair removal.", category: "hair-removal", icon: "bi-waves", benefits: ["Precise", "Natural method", "Gentle", "Affordable"], duration: "15-30 min" },
  { id: "hair-removal-men", title: "Hair Removal for Men", description: "Specialized hair removal services designed for men's needs.", category: "hair-removal", icon: "bi-lightning-charge", benefits: ["Men's grooming", "All areas", "Comfortable", "Professional"], duration: "30-90 min" },
  { id: "hair-removal-women", title: "Hair Removal for Women", description: "Complete hair removal solutions tailored for women.", category: "hair-removal", icon: "bi-stars", benefits: ["Women's care", "Gentle", "All areas", "Smooth results"], duration: "30-90 min" },
  { id: "painless-hair-removal", title: "Painless Hair Removal", description: "Advanced technology for comfortable, pain-free hair removal experience.", category: "hair-removal", icon: "bi-heart", benefits: ["No pain", "Comfortable", "Effective", "All skin types"], duration: "15-60 min" },
  { id: "permanent-hair-removal", title: "Permanent Hair Removal", description: "Long-term hair removal solutions for permanent smoothness.", category: "hair-removal", icon: "bi-star", benefits: ["Permanent", "Cost-effective", "Time-saving", "Confidence"], duration: "Multiple sessions" },

  // Permanent Makeup
  { id: "eyebrow-embroidery", title: "Eyebrow Embroidery", description: "Hair-stroke technique creating natural-looking, fuller eyebrows.", category: "permanent-makeup", icon: "bi-brush", benefits: ["Natural strokes", "Fuller brows", "Long-lasting", "Custom shape"], duration: "2-3 hours" },
  { id: "ombre-brows", title: "Ombre Eyebrow Styling", description: "Gradient powder effect for soft, defined eyebrows.", category: "permanent-makeup", icon: "bi-stars", benefits: ["Soft gradient", "Defined shape", "Low maintenance", "Natural fade"], duration: "2-3 hours" },
  { id: "powder-brows", title: "Powder Brow Styling", description: "Soft, powdered makeup effect for perfectly filled eyebrows.", category: "permanent-makeup", icon: "bi-brush", benefits: ["Makeup effect", "Filled look", "Long-lasting", "Soft finish"], duration: "2-3 hours" },
  { id: "eyebrow-tinting", title: "Eyebrow Tinting", description: "Semi-permanent color for enhanced, defined eyebrows.", category: "permanent-makeup", icon: "bi-droplet", benefits: ["Enhanced color", "Defined brows", "Quick", "Natural look"], duration: "20 min" },
  { id: "permanent-eyeliner", title: "Permanent Eyeliner", description: "Wake up with perfectly defined eyes every day.", category: "permanent-makeup", icon: "bi-eye", benefits: ["Always ready", "Defined eyes", "Smudge-proof", "Time-saving"], duration: "1.5-2 hours" },
  { id: "lash-tattooing", title: "Lash Tattooing", description: "Enhancement of lash line for the appearance of thicker lashes.", category: "permanent-makeup", icon: "bi-eye", benefits: ["Fuller lashes", "Subtle enhancement", "No makeup needed", "Natural"], duration: "1-1.5 hours" },
  { id: "lip-blushing", title: "Lip Blushing", description: "Natural-looking lip color enhancement for perfect pout.", category: "permanent-makeup", icon: "bi-heart", benefits: ["Natural color", "Defined shape", "Fuller look", "Long-lasting"], duration: "2-3 hours" },
  { id: "permanent-lip-makeup", title: "Permanent Lip Makeup", description: "Full lip color for consistently beautiful, defined lips.", category: "permanent-makeup", icon: "bi-heart", benefits: ["Full color", "Always ready", "Shape correction", "Bold or subtle"], duration: "2-3 hours" },
  { id: "nipple-coloring", title: "Nipple Colouring", description: "Areola restoration and enhancement through medical tattooing.", category: "permanent-makeup", icon: "bi-circle-fill", benefits: ["Restoration", "Natural look", "Confidence", "Medical grade"], duration: "1-2 hours" },
  { id: "medical-micropigmentation", title: "Medical Micropigmentation", description: "Corrective pigmentation for scars, vitiligo, and areola restoration.", category: "permanent-makeup", icon: "bi-heart", benefits: ["Corrective", "Natural match", "Confidence", "Permanent"], duration: "2-4 hours" },
  { id: "eyelash-enhancements", title: "Eyelash Enhancements", description: "Lash lift, tint, and extensions for dramatic, beautiful eyes.", category: "permanent-makeup", icon: "bi-eye", benefits: ["Longer lashes", "Lifted look", "No mascara", "Dramatic eyes"], duration: "60-90 min" },
  { id: "permanent-makeup-touchups", title: "Permanent Makeup Touch-ups", description: "Refresh and maintain your existing permanent makeup.", category: "permanent-makeup", icon: "bi-brush", benefits: ["Color refresh", "Shape adjust", "Maintain look", "Quick session"], duration: "1-2 hours" },

  // Eye & Brow Services
  { id: "eyebrow-shaping", title: "Eyebrow Shaping", description: "Professional shaping for perfectly arched, flattering eyebrows.", category: "eye-brow", icon: "bi-stars", benefits: ["Perfect arch", "Face framing", "Clean shape", "Professional"], duration: "20 min" },
  { id: "eyebrow-waxing", title: "Eyebrow Waxing", description: "Quick and effective eyebrow shaping through waxing.", category: "eye-brow", icon: "bi-star", benefits: ["Quick", "Clean finish", "Smooth skin", "Long-lasting"], duration: "15 min" },
  { id: "eyebrow-transplant", title: "Eyebrow Transplants", description: "Permanent solution for thin or sparse eyebrows through hair transplantation.", category: "eye-brow", icon: "bi-scissors", benefits: ["Permanent", "Natural growth", "Fuller brows", "Custom design"], duration: "3-4 hours" },
  { id: "eyebrow-hair-removal", title: "Eyebrow Hair Removal", description: "Precise removal of unwanted hairs around the eyebrow area.", category: "eye-brow", icon: "bi-lightning-charge", benefits: ["Clean edges", "Precise", "Long-lasting", "Neat look"], duration: "15 min" },
  { id: "eyeliners", title: "Eyeliner Services", description: "Professional eyeliner application and enhancement services.", category: "eye-brow", icon: "bi-eye", benefits: ["Professional look", "Various styles", "Expert application", "Defined eyes"], duration: "30 min" },
  { id: "eyebrows", title: "Complete Eyebrow Services", description: "Full range of eyebrow services from shaping to enhancement.", category: "eye-brow", icon: "bi-brush", benefits: ["Full service", "Multiple options", "Expert care", "Perfect brows"], duration: "15-60 min" },

  // Anti-Aging & Fillers
  { id: "botox", title: "Botox Treatments", description: "Reduce fine lines and wrinkles with precision Botox injections.", category: "anti-aging", icon: "bi-stars", benefits: ["Smooth wrinkles", "Quick results", "Non-surgical", "Natural look"], duration: "15-30 min" },
  { id: "dermal-fillers", title: "Dermal Fillers", description: "Restore volume and contour with premium hyaluronic acid fillers.", category: "anti-aging", icon: "bi-droplet", benefits: ["Volume restore", "Instant results", "Natural feel", "Long-lasting"], duration: "30-60 min" },
  { id: "lip-fillers", title: "Lip Fillers", description: "Enhance lip volume and shape for a fuller, more defined pout.", category: "anti-aging", icon: "bi-heart", benefits: ["Fuller lips", "Custom volume", "Natural look", "Immediate"], duration: "30 min" },
  { id: "skin-tightening", title: "Skin Tightening", description: "Non-surgical treatments to firm and lift sagging skin.", category: "anti-aging", icon: "bi-lightning-charge", benefits: ["Lifts skin", "Firms texture", "Non-surgical", "Gradual improvement"], duration: "45-90 min" },
  { id: "wrinkle-reduction", title: "Wrinkle Reduction", description: "Comprehensive approach to minimize and prevent wrinkles.", category: "anti-aging", icon: "bi-star", benefits: ["Smooths lines", "Prevents aging", "Multiple methods", "Youthful skin"], duration: "30-60 min" },
  { id: "anti-aging-treatment", title: "Anti-Aging Treatment", description: "Complete anti-aging protocol combining multiple rejuvenation techniques.", category: "anti-aging", icon: "bi-award", benefits: ["Comprehensive", "Multiple benefits", "Custom plan", "Lasting results"], duration: "60-90 min" },
  { id: "laser-therapy", title: "Laser Therapy", description: "Advanced laser treatments for skin rejuvenation and renewal.", category: "anti-aging", icon: "bi-lightning-charge", benefits: ["Skin renewal", "Collagen boost", "Even tone", "Texture improvement"], duration: "30-60 min" },
  { id: "laser-skin-therapy", title: "Laser Skin Therapy", description: "Targeted laser treatments for specific skin concerns and rejuvenation.", category: "anti-aging", icon: "bi-stars", benefits: ["Precise treatment", "Quick recovery", "Visible results", "Safe"], duration: "30-45 min" },

  // Body Contouring
  { id: "cool-sculpting", title: "Cool Sculpting Treatments", description: "Non-invasive fat freezing technology for targeted fat reduction.", category: "body-contouring", icon: "bi-snow", benefits: ["Non-invasive", "No downtime", "Targeted fat loss", "Permanent results"], duration: "35-60 min per area" },
  { id: "liposuction", title: "Liposuction Surgery", description: "Surgical fat removal for dramatic body contouring results.", category: "body-contouring", icon: "bi-fire", benefits: ["Dramatic results", "Permanent", "Precise contouring", "Multiple areas"], duration: "1-3 hours" },
  { id: "body-contouring", title: "Hair & Body Contouring Treatments", description: "Comprehensive body sculpting solutions for your ideal figure.", category: "body-contouring", icon: "bi-star", benefits: ["Custom approach", "Multiple options", "Visible results", "Expert care"], duration: "Varies" },
  { id: "contoured-physique", title: "Contoured Physique", description: "Advanced treatments to achieve your desired body shape and definition.", category: "body-contouring", icon: "bi-stars", benefits: ["Body definition", "Fat reduction", "Toning", "Sculpted look"], duration: "Varies" },

  // Cosmetic Surgery
  { id: "facelift", title: "Facelift Surgery", description: "Surgical rejuvenation for a naturally younger appearance.", category: "cosmetic-surgery", icon: "bi-award", benefits: ["Dramatic lift", "Long-lasting", "Natural results", "Full rejuvenation"], duration: "3-5 hours" },
  { id: "breast-augmentation", title: "Breast Augmentation Surgery", description: "Enhance breast size and shape with implants or fat transfer.", category: "cosmetic-surgery", icon: "bi-heart", benefits: ["Custom size", "Natural feel", "Lasting results", "Confidence boost"], duration: "1-2 hours" },
  { id: "plastic-surgery", title: "Plastic & Cosmetic Surgery", description: "Full range of cosmetic surgical procedures by expert surgeons.", category: "cosmetic-surgery", icon: "bi-stars", benefits: ["Expert surgeons", "Multiple procedures", "Safe facility", "Beautiful results"], duration: "Varies" },
  { id: "reconstructive-surgery", title: "Reconstructive Cosmetic Surgery", description: "Corrective procedures to restore form and function.", category: "cosmetic-surgery", icon: "bi-heart", benefits: ["Restoration", "Function improvement", "Aesthetic", "Expert care"], duration: "Varies" },
  { id: "scarless-transplant", title: "Scarless Hair Transplant", description: "Advanced techniques for hair restoration without visible scarring.", category: "cosmetic-surgery", icon: "bi-scissors", benefits: ["No visible scars", "Natural results", "Quick healing", "Permanent"], duration: "4-8 hours" },
];

/* ================== COMPONENT ================== */

const TreatmentCard = ({ treatment, onOpen, index }) => {
  return (
    <div
      className="card h-100 border-border/50 bg-card/80 backdrop-blur-sm group cursor-pointer"
      role="button"
      onClick={onOpen}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="card-body text-center">
        <div className="mx-auto mb-3 d-flex h-20 w-20 align-items-center justify-content-center rounded-circle redgold-gradient shadow-lg" style={{width:80,height:80}}>
          <i className={`bi ${treatment.icon} fs-2 text-charcoal`} />
        </div>
        <h5 className="mb-2">{treatment.title}</h5>
        <p className="text-muted small mb-3" style={{minHeight: '2.2em'}}>{treatment.description}</p>
        <span className="badge bg-secondary">{treatment.duration}</span>
        <div className="mt-3">
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={(e) => {
              e.stopPropagation();
              onOpen();
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

const TreatmentModal = ({ treatment }) => {
  const navigate = useNavigate();

  if (!treatment) {
    return (
      <div className="p-6 text-center">
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const handleBook = () => {
    const el = document.getElementById("treatmentModal");
    if (el) {
      const bs = Modal.getInstance(el) || Modal.getOrCreateInstance(el);
      try {
        bs.hide();
      } catch {
        // ignore
      }
    }
    setTimeout(() => navigate('/contact'), 220);
  };

  return (
    <>
      <div className="modal-header border-0">
        <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body py-4 px-5">
        <div className="text-center">
          <div className="mx-auto mb-4 d-flex h-24 w-24 align-items-center justify-content-center rounded-circle redgold-gradient premium-shadow" style={{width:96,height:96}}>
            <i className={`bi ${treatment.icon} fs-1 text-charcoal`} />
          </div>
          <h3 className="mb-2">{treatment.title}</h3>
          <div className="mb-3 text-muted">
            <i className="bi bi-clock me-2" /> {treatment.duration}
          </div>
          <p className="text-muted px-3">{treatment.description}</p>

          {treatment.benefits && (
            <div className="mt-4 text-start px-4">
              <h6 className="text-center redgold-text mb-3">KEY BENEFITS</h6>
              <div className="row">
                {treatment.benefits.map((b, i) => (
                  <div key={i} className="col-6 mb-2">
                    <i className="bi bi-check2-circle text-warning me-2" /> {b}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-4">
            <span className="badge rounded-pill badge-redgold mb-3">{treatment.category.replace(/-/g, ' ')}</span>
          </div>

          <div className="mt-3">
            <button type="button" className="btn btn-redgold btn-lg px-4" onClick={handleBook}>
              <i className="bi bi-telephone me-2" /> Book Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
};


const Treatments = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selected, setSelected] = useState(null);

  const filteredTreatments = useMemo(() => {
    if (activeCategory === "all") return treatments;
    return treatments.filter((t) => t.category === activeCategory);
  }, [activeCategory]);

  // Open modal programmatically after selecting a treatment so React state is set
  const openModal = (treatment) => {
  setSelected(treatment);

  setTimeout(() => {
    const el = document.getElementById("treatmentModal");
    if (!el) return;

    const modal = Modal.getOrCreateInstance(el);
    modal.show();
  }, 50);
};


  return (
    <section id="treatments" className="section-padding bg-light position-relative overflow-hidden">
      <div className="container">
        {/* HERO */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">Our <span className="text-warning">Treatments</span></h1>
          <p className="text-muted">Discover premium hair & skin care solutions</p>
        </div>

        {/* CATEGORY FILTER (horizontal) */}
        <div className="d-flex gap-2 overflow-auto mb-4 pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
                className={`btn btn-sm rounded-pill ${activeCategory === cat.id ? "btn-redgold" : "btn-outline-redgold"}`}
                onClick={() => setActiveCategory(cat.id)}
            >
              <i className={`bi ${cat.icon} me-1`} />
              {cat.name}
            </button>
          ))}
        </div>

        <p className="text-center text-muted mb-4">Showing <strong>{filteredTreatments.length}</strong> treatments</p>

        <div className="row g-4">
          {filteredTreatments.map((item, idx) => (
            <div key={item.id} className="col-sm-6 col-lg-4">
              <TreatmentCard treatment={item} onOpen={() => openModal(item)} index={idx} />
            </div>
          ))}
        </div>

        {/* MODAL (Bootstrap) - content rendered by TreatmentModal */}
        <div className="modal fade" id="treatmentModal" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content p-0 border-0">
              <TreatmentModal treatment={selected} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatments;
