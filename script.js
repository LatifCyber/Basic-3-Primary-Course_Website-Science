// =============================================
//  Integrated Science for Basic 3 — script.js
//  Updated: Topic banks, per-question timer, auto-submit
// =============================================

/* =============================================
   QUIZ DATA — 8 Topics × 10 Questions
   ============================================= */
const topicBanks = [
  {
    id: "living",
    label: "Living & Non-Living Things",
    emoji: "🌿",
    color: "#2ECC71",
    questions: [
      {
        question: "Which of these is a LIVING thing?",
        emoji: "🌿",
        options: ["🌳 A Tree", "🪨 A Rock", "🪑 A Chair", "💧 Water"],
        correct: 0,
        explanation: "Trees are living things — they grow, need food, and can reproduce."
      },
      {
        question: "What do ALL living things need to survive?",
        emoji: "💡",
        options: ["🏠 A house", "🍎 Food and water", "📚 A school", "🎨 Paint"],
        correct: 1,
        explanation: "All living things need food and water to survive and stay healthy."
      },
      {
        question: "Which of these is a NON-LIVING thing?",
        emoji: "🪨",
        options: ["🐟 A fish", "🌺 A flower", "🌊 A river", "🪨 A stone"],
        correct: 3,
        explanation: "A stone is non-living — it cannot grow, eat, or reproduce."
      },
      {
        question: "Which of these characteristics is shared by ALL living things?",
        emoji: "🔬",
        options: ["🏃 Movement", "🌱 Growth", "🎵 Making sounds", "💡 Giving light"],
        correct: 1,
        explanation: "All living things grow at some stage of their life."
      },
      {
        question: "A dog gives birth to puppies. This shows that living things can…",
        emoji: "🐶",
        options: ["🎭 Act", "✈️ Fly", "🐣 Reproduce", "💤 Sleep forever"],
        correct: 2,
        explanation: "Living things can reproduce — they make more of their own kind."
      },
      {
        question: "Which of these can respond to changes around it?",
        emoji: "🌻",
        options: ["🪨 A pebble", "🌻 A sunflower", "🚪 A door", "🧊 An ice cube"],
        correct: 1,
        explanation: "Sunflowers respond by turning to face the sun — this is called a response to stimuli."
      },
      {
        question: "Which of the following is TRUE about non-living things?",
        emoji: "❌",
        options: ["They eat food", "They grow bigger", "They do not breathe", "They can move by themselves"],
        correct: 2,
        explanation: "Non-living things do not breathe, eat, grow, or reproduce."
      },
      {
        question: "A candle burns and gets smaller. Is a candle living or non-living?",
        emoji: "🕯️",
        options: ["Living — it moves", "Non-living — it cannot reproduce", "Living — it gives heat", "Non-living — it is made of wax"],
        correct: 1,
        explanation: "A candle is non-living because it cannot reproduce, breathe, or grow on its own."
      },
      {
        question: "Which of these would you find in the LIVING group?",
        emoji: "🧩",
        options: ["💻 A computer", "🐛 A caterpillar", "🎸 A guitar", "🏺 A pot"],
        correct: 1,
        explanation: "A caterpillar is a living insect — it grows, eats, breathes, and will become a butterfly!"
      },
      {
        question: "What do we call the study of living things?",
        emoji: "🔭",
        options: ["🌍 Geography", "🧬 Biology", "🔢 Mathematics", "🎨 Art"],
        correct: 1,
        explanation: "Biology is the science that studies all living things on Earth."
      }
    ]
  },
  {
    id: "plants",
    label: "Plants & Photosynthesis",
    emoji: "🌱",
    color: "#27AE60",
    questions: [
      {
        question: "What do plants need to make their own food?",
        emoji: "☀️",
        options: ["🌙 Moonlight", "☀️ Sunlight", "🔥 Fire", "❄️ Ice"],
        correct: 1,
        explanation: "Plants use sunlight, water and air to make food — this is called photosynthesis!"
      },
      {
        question: "Which gas do plants release during photosynthesis?",
        emoji: "🌿",
        options: ["💨 Carbon dioxide", "🌬️ Oxygen", "💧 Water vapour", "🔥 Smoke"],
        correct: 1,
        explanation: "Plants release oxygen during photosynthesis — this is the air we breathe!"
      },
      {
        question: "Which part of the plant absorbs water from the soil?",
        emoji: "🌳",
        options: ["🌸 Flower", "🍃 Leaves", "🌿 Roots", "🪵 Stem"],
        correct: 2,
        explanation: "Roots grow underground and absorb water and nutrients from the soil."
      },
      {
        question: "Which part of the plant makes food using sunlight?",
        emoji: "🍃",
        options: ["🌺 Petals", "🍃 Leaves", "🌰 Seeds", "🌿 Roots"],
        correct: 1,
        explanation: "Leaves contain chlorophyll which captures sunlight to make food for the plant."
      },
      {
        question: "What green substance in leaves captures sunlight?",
        emoji: "🟢",
        options: ["🔴 Haemoglobin", "🟢 Chlorophyll", "⚪ Calcium", "🟡 Starch"],
        correct: 1,
        explanation: "Chlorophyll is the green pigment in leaves that absorbs sunlight for photosynthesis."
      },
      {
        question: "What do we call the process by which plants make their food?",
        emoji: "🔬",
        options: ["🍽️ Digestion", "🌱 Germination", "🌿 Photosynthesis", "💧 Evaporation"],
        correct: 2,
        explanation: "Photosynthesis is how plants use sunlight, water and carbon dioxide to produce food."
      },
      {
        question: "Which part of the plant carries water from roots to leaves?",
        emoji: "🌿",
        options: ["🌸 Flower", "🪵 Stem", "🌰 Seed", "🍃 Leaf edge"],
        correct: 1,
        explanation: "The stem acts like a straw, carrying water and nutrients from roots up to the leaves."
      },
      {
        question: "Plants take in carbon dioxide through tiny holes called…",
        emoji: "🔍",
        options: ["🫀 Veins", "🕳️ Stomata", "🌀 Cells", "💧 Pores"],
        correct: 1,
        explanation: "Stomata are tiny pores on leaves through which plants breathe in carbon dioxide."
      },
      {
        question: "What happens to a plant that is kept in the dark for many days?",
        emoji: "🌑",
        options: ["It grows faster", "It turns yellow and dies", "It makes more oxygen", "Nothing changes"],
        correct: 1,
        explanation: "Without sunlight, plants cannot make food and will turn yellow and eventually die."
      },
      {
        question: "Which of these is NOT needed for photosynthesis?",
        emoji: "❓",
        options: ["☀️ Sunlight", "💧 Water", "🌬️ Carbon dioxide", "🔥 Fire"],
        correct: 3,
        explanation: "Photosynthesis needs sunlight, water, and carbon dioxide — not fire!"
      }
    ]
  },
  {
    id: "humanbody",
    label: "The Human Body",
    emoji: "❤️",
    color: "#E74C3C",
    questions: [
      {
        question: "Which part of the human body pumps blood?",
        emoji: "❤️",
        options: ["🧠 The Brain", "🦷 The Teeth", "❤️ The Heart", "👅 The Tongue"],
        correct: 2,
        explanation: "The heart pumps blood all around your body to keep you alive!"
      },
      {
        question: "Which organ do we use to breathe?",
        emoji: "🫁",
        options: ["❤️ Heart", "🧠 Brain", "🫁 Lungs", "🦴 Bones"],
        correct: 2,
        explanation: "We use our lungs to breathe in air and get the oxygen our body needs!"
      },
      {
        question: "How many bones does an adult human body have?",
        emoji: "🦴",
        options: ["🔢 100", "🔢 150", "🔢 206", "🔢 350"],
        correct: 2,
        explanation: "Adult humans have 206 bones. Babies are born with about 270, which fuse as we grow!"
      },
      {
        question: "Which organ controls everything your body does?",
        emoji: "🧠",
        options: ["❤️ Heart", "🧠 Brain", "🫁 Lungs", "🦴 Backbone"],
        correct: 1,
        explanation: "The brain is the control centre — it controls thinking, movement, and all body functions."
      },
      {
        question: "What is the job of the skeleton?",
        emoji: "💀",
        options: ["To make blood", "To support and protect the body", "To digest food", "To carry oxygen"],
        correct: 1,
        explanation: "The skeleton supports the body, protects organs, and helps us move."
      },
      {
        question: "Which body system breaks down food into nutrients?",
        emoji: "🍎",
        options: ["🫀 Circulatory system", "🍽️ Digestive system", "🧠 Nervous system", "🫁 Respiratory system"],
        correct: 1,
        explanation: "The digestive system breaks down food into nutrients that the body can absorb and use."
      },
      {
        question: "Which sense organ do we use to smell?",
        emoji: "👃",
        options: ["👁️ Eyes", "👂 Ears", "👃 Nose", "👅 Tongue"],
        correct: 2,
        explanation: "We use our nose to detect smells. It contains special cells that sense different scents."
      },
      {
        question: "What gas do our bodies need from the air we breathe?",
        emoji: "🌬️",
        options: ["💨 Carbon dioxide", "🌬️ Oxygen", "💧 Steam", "🔥 Nitrogen only"],
        correct: 1,
        explanation: "Our bodies need oxygen from the air. The lungs take in oxygen and release carbon dioxide."
      },
      {
        question: "How many teeth does a healthy adult usually have?",
        emoji: "🦷",
        options: ["🔢 20", "🔢 28–32", "🔢 40", "🔢 10"],
        correct: 1,
        explanation: "Adults usually have 28 to 32 teeth including wisdom teeth."
      },
      {
        question: "What do muscles help your body do?",
        emoji: "💪",
        options: ["Digest food", "Move and lift things", "Clean the blood", "Make new bones"],
        correct: 1,
        explanation: "Muscles are attached to bones and help your body move, lift, and perform actions."
      }
    ]
  },
  {
    id: "animals",
    label: "Animals & Classification",
    emoji: "🐾",
    color: "#E67E22",
    questions: [
      {
        question: "What do we call animals that eat ONLY plants?",
        emoji: "🐄",
        options: ["🦁 Carnivores", "🌿 Herbivores", "🍽️ Omnivores", "🐟 Aquatic"],
        correct: 1,
        explanation: "Herbivores eat only plants. Examples are cows, rabbits and elephants!"
      },
      {
        question: "How many legs does an insect have?",
        emoji: "🐛",
        options: ["🔢 Four legs", "🔢 Six legs", "🔢 Eight legs", "🔢 Ten legs"],
        correct: 1,
        explanation: "All insects have exactly 6 legs! Examples are ants, bees and butterflies."
      },
      {
        question: "What do we call an animal that eats BOTH plants and animals?",
        emoji: "🐻",
        options: ["🌿 Herbivore", "🦁 Carnivore", "🍽️ Omnivore", "🐟 Pescatarian"],
        correct: 2,
        explanation: "Omnivores eat both plants and animals. Humans and bears are omnivores."
      },
      {
        question: "Which of these animals is a mammal?",
        emoji: "🐘",
        options: ["🐊 Crocodile", "🐸 Frog", "🐘 Elephant", "🦅 Eagle"],
        correct: 2,
        explanation: "Elephants are mammals — they have hair, are warm-blooded, and feed their young milk."
      },
      {
        question: "Where do fish live?",
        emoji: "🐟",
        options: ["🌲 In forests", "🌊 In water", "🌵 In deserts", "🌨️ In snow"],
        correct: 1,
        explanation: "Fish live in water — rivers, lakes, and the ocean!"
      },
      {
        question: "What do we call the young one of a butterfly?",
        emoji: "🦋",
        options: ["🐣 A chick", "🐛 A caterpillar", "🐸 A tadpole", "🐜 A grub"],
        correct: 1,
        explanation: "A butterfly starts life as a caterpillar, becomes a pupa, and then a beautiful butterfly!"
      },
      {
        question: "Which group of animals lays eggs AND breathes through gills when young?",
        emoji: "🐸",
        options: ["🦁 Mammals", "🐦 Birds", "🐸 Amphibians", "🦎 Reptiles"],
        correct: 2,
        explanation: "Amphibians like frogs breathe through gills when young (tadpoles) and lungs as adults."
      },
      {
        question: "What do carnivores eat?",
        emoji: "🦁",
        options: ["🌿 Only plants", "🍖 Only other animals", "🌿🍖 Both plants and animals", "💧 Only water"],
        correct: 1,
        explanation: "Carnivores eat only other animals. Lions, tigers and crocodiles are carnivores."
      },
      {
        question: "Which of these is NOT an insect?",
        emoji: "🕷️",
        options: ["🐝 Bee", "🦋 Butterfly", "🕷️ Spider", "🐜 Ant"],
        correct: 2,
        explanation: "Spiders are NOT insects — they have 8 legs and are called arachnids!"
      },
      {
        question: "What is the correct life cycle order of a frog?",
        emoji: "🐸",
        options: [
          "Egg → Frog → Tadpole",
          "Egg → Tadpole → Frog",
          "Tadpole → Egg → Frog",
          "Frog → Tadpole → Egg"
        ],
        correct: 1,
        explanation: "A frog's life cycle: Egg → Tadpole → Young frog → Adult frog."
      }
    ]
  },
  {
    id: "environment",
    label: "Environment & Conservation",
    emoji: "🌍",
    color: "#16A085",
    questions: [
      {
        question: "Which of these is NOT good for our environment?",
        emoji: "🌍",
        options: ["🌳 Planting trees", "♻️ Recycling", "🔥 Burning rubbish", "💧 Saving water"],
        correct: 2,
        explanation: "Burning rubbish pollutes the air and harms our environment. We should recycle instead!"
      },
      {
        question: "What do we call reusing materials to make new things?",
        emoji: "♻️",
        options: ["🗑️ Dumping", "♻️ Recycling", "🔥 Burning", "💧 Washing"],
        correct: 1,
        explanation: "Recycling means turning old materials into new products, reducing waste and pollution."
      },
      {
        question: "Cutting down many trees is called…",
        emoji: "🪓",
        options: ["🌱 Reforestation", "🪓 Deforestation", "🌿 Photosynthesis", "🌊 Erosion"],
        correct: 1,
        explanation: "Deforestation is the large-scale cutting of trees which destroys habitats and causes climate change."
      },
      {
        question: "Which of these is a source of water pollution?",
        emoji: "🚰",
        options: ["🌧️ Rainfall", "🏭 Dumping chemicals in rivers", "🌊 Ocean waves", "💧 Clean tap water"],
        correct: 1,
        explanation: "Dumping chemicals and waste in rivers pollutes water, harming animals and people."
      },
      {
        question: "What can we do to help conserve electricity?",
        emoji: "💡",
        options: ["Leave lights on all night", "Turn off lights when not needed", "Buy more bulbs", "Open windows in the cold"],
        correct: 1,
        explanation: "Turning off lights and appliances when not needed helps save electricity and reduces pollution."
      },
      {
        question: "Which of these actions helps the environment?",
        emoji: "🌱",
        options: ["🚗 Driving everywhere", "🏭 Burning plastic", "🌳 Planting more trees", "🗑️ Littering"],
        correct: 2,
        explanation: "Planting trees helps the environment by providing oxygen, reducing pollution, and creating habitats."
      },
      {
        question: "What do we call the protective layer around Earth that blocks harmful rays?",
        emoji: "🌐",
        options: ["🌊 The ocean layer", "🧊 The ice cap", "🌐 The ozone layer", "☁️ The cloud layer"],
        correct: 2,
        explanation: "The ozone layer protects Earth from the Sun's harmful ultraviolet (UV) rays."
      },
      {
        question: "Which of these is a renewable source of energy?",
        emoji: "☀️",
        options: ["🛢️ Petroleum", "⚡ Coal", "☀️ Solar energy", "💨 Natural gas"],
        correct: 2,
        explanation: "Solar energy from the Sun is renewable — it will never run out and does not pollute!"
      },
      {
        question: "What does 'conservation' mean?",
        emoji: "🌿",
        options: [
          "Destroying nature for buildings",
          "Protecting and saving natural resources",
          "Burning fuels to make energy",
          "Catching wild animals"
        ],
        correct: 1,
        explanation: "Conservation means protecting and carefully using natural resources so they last for the future."
      },
      {
        question: "Why is it important to keep our water bodies clean?",
        emoji: "💧",
        options: [
          "So ships can travel faster",
          "To keep animals and people healthy",
          "To make the water look nice",
          "So we can dump more waste there"
        ],
        correct: 1,
        explanation: "Clean water is essential for the health of animals, plants, and humans who depend on it."
      }
    ]
  },
  {
    id: "solarsystem",
    label: "The Solar System",
    emoji: "☀️",
    color: "#F39C12",
    questions: [
      {
        question: "Which of these gives us light and heat?",
        emoji: "🌞",
        options: ["🌙 The Moon", "⭐ A star", "☀️ The Sun", "🌍 The Earth"],
        correct: 2,
        explanation: "The Sun gives us light and heat every day. It is our closest star!"
      },
      {
        question: "How many planets are in our Solar System?",
        emoji: "🪐",
        options: ["🔢 6", "🔢 7", "🔢 8", "🔢 9"],
        correct: 2,
        explanation: "There are 8 planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune."
      },
      {
        question: "Which planet do we live on?",
        emoji: "🌍",
        options: ["🔴 Mars", "🌍 Earth", "🟡 Venus", "🔵 Neptune"],
        correct: 1,
        explanation: "We live on planet Earth — the third planet from the Sun!"
      },
      {
        question: "What is the Moon?",
        emoji: "🌕",
        options: [
          "A planet like Earth",
          "A natural satellite of Earth",
          "A small star",
          "A comet"
        ],
        correct: 1,
        explanation: "The Moon is Earth's natural satellite — it orbits (goes around) the Earth."
      },
      {
        question: "How long does it take the Earth to orbit the Sun once?",
        emoji: "🔄",
        options: ["🕐 One day", "📅 One week", "📆 One month", "🗓️ One year"],
        correct: 3,
        explanation: "It takes Earth exactly one year (365 days) to complete one full orbit around the Sun."
      },
      {
        question: "Which planet is known as the Red Planet?",
        emoji: "🔴",
        options: ["🟡 Venus", "🔴 Mars", "🟠 Jupiter", "🔵 Uranus"],
        correct: 1,
        explanation: "Mars is called the Red Planet because its surface is covered in reddish dust and rocks."
      },
      {
        question: "What causes day and night on Earth?",
        emoji: "🌓",
        options: [
          "The Moon moving around Earth",
          "Earth spinning on its axis",
          "The Sun moving across the sky",
          "Clouds blocking sunlight"
        ],
        correct: 1,
        explanation: "Earth spinning (rotating) on its axis causes day and night — one side faces the Sun, the other is dark."
      },
      {
        question: "Which is the largest planet in our Solar System?",
        emoji: "🪐",
        options: ["🌍 Earth", "🔴 Mars", "🪐 Jupiter", "🟡 Saturn"],
        correct: 2,
        explanation: "Jupiter is the largest planet — it is so big that over 1,300 Earths could fit inside it!"
      },
      {
        question: "What is a star made of?",
        emoji: "⭐",
        options: ["🧊 Ice and rock", "🔥 Hot burning gas", "💧 Water", "🪨 Solid metal"],
        correct: 1,
        explanation: "Stars are made of extremely hot burning gas — mostly hydrogen and helium."
      },
      {
        question: "Which planet is closest to the Sun?",
        emoji: "☀️",
        options: ["🌍 Earth", "🟡 Venus", "⚫ Mercury", "🔴 Mars"],
        correct: 2,
        explanation: "Mercury is the closest planet to the Sun and the smallest planet in our Solar System."
      }
    ]
  },
  {
    id: "matter",
    label: "States of Matter",
    emoji: "🧪",
    color: "#8E44AD",
    questions: [
      {
        question: "Which of these is a SOLID?",
        emoji: "🪨",
        options: ["💧 Water", "🌬️ Air", "🪨 Rock", "🫧 Steam"],
        correct: 2,
        explanation: "A rock is a solid — it has a fixed shape and does not flow."
      },
      {
        question: "Which state of matter takes the shape of its container?",
        emoji: "💧",
        options: ["🧊 Solid", "💧 Liquid", "🌬️ Gas", "🔥 Plasma"],
        correct: 1,
        explanation: "Liquids take the shape of whatever container they are poured into."
      },
      {
        question: "What happens to water when it is heated to 100°C?",
        emoji: "🔥",
        options: ["It freezes", "It turns to ice", "It boils and becomes steam", "It becomes a solid"],
        correct: 2,
        explanation: "When water reaches 100°C it boils and turns into steam (water vapour), a gas."
      },
      {
        question: "What is the process of water turning from liquid to gas called?",
        emoji: "♨️",
        options: ["🧊 Freezing", "💧 Condensation", "♨️ Evaporation", "🌊 Flooding"],
        correct: 2,
        explanation: "Evaporation is when a liquid turns into a gas, usually when heated."
      },
      {
        question: "What is the process of liquid water turning to ice called?",
        emoji: "🧊",
        options: ["🧊 Freezing", "♨️ Evaporation", "💧 Melting", "🌬️ Condensation"],
        correct: 0,
        explanation: "Freezing is when a liquid cools down and becomes a solid. Water freezes at 0°C."
      },
      {
        question: "Which of these is an example of a GAS?",
        emoji: "🌬️",
        options: ["🧊 Ice", "💧 Juice", "🌬️ Air", "🪵 Wood"],
        correct: 2,
        explanation: "Air is a gas — it has no fixed shape and spreads to fill any space."
      },
      {
        question: "What happens to most solids when they are heated strongly?",
        emoji: "🔥",
        options: ["They get harder", "They melt into liquid", "They shrink", "They become heavier"],
        correct: 1,
        explanation: "Most solids melt and become liquids when heated to a high enough temperature."
      },
      {
        question: "Which of these has NO fixed shape and NO fixed volume?",
        emoji: "🫧",
        options: ["🪨 Solid", "💧 Liquid", "🌬️ Gas", "🧊 Ice"],
        correct: 2,
        explanation: "Gases have no fixed shape or volume — they spread out to fill any container completely."
      },
      {
        question: "What is it called when gas cools and turns into liquid?",
        emoji: "💦",
        options: ["♨️ Evaporation", "💦 Condensation", "🧊 Freezing", "🔥 Combustion"],
        correct: 1,
        explanation: "Condensation is when gas cools and turns back into liquid — like water droplets on a cold glass."
      },
      {
        question: "Which state of matter has particles packed closely together in a fixed pattern?",
        emoji: "🔬",
        options: ["🌬️ Gas", "💧 Liquid", "🧊 Solid", "🫧 Vapour"],
        correct: 2,
        explanation: "In solids, particles are tightly packed in a fixed pattern, giving solids their definite shape."
      }
    ]
  },
  {
    id: "weather",
    label: "Weather & Seasons",
    emoji: "🌦️",
    color: "#3498DB",
    questions: [
      {
        question: "What instrument do we use to measure temperature?",
        emoji: "🌡️",
        options: ["📏 A ruler", "⚖️ A scale", "🌡️ A thermometer", "☂️ An umbrella"],
        correct: 2,
        explanation: "A thermometer measures how hot or cold the air is — it measures temperature."
      },
      {
        question: "What causes rainfall?",
        emoji: "🌧️",
        options: [
          "Wind blowing hard",
          "Water evaporating and forming clouds that produce rain",
          "The Moon pulling water down",
          "Trees releasing water"
        ],
        correct: 1,
        explanation: "Water evaporates, rises, cools to form clouds, and falls back as rain. This is the water cycle."
      },
      {
        question: "What do we call weather that is very, very hot and dry?",
        emoji: "☀️",
        options: ["❄️ Frosty", "🌧️ Rainy", "🌬️ Breezy", "🔆 Scorching / Sunny"],
        correct: 3,
        explanation: "Very hot, dry weather is described as sunny or scorching, with high temperatures."
      },
      {
        question: "How many seasons are there in a year in many parts of the world?",
        emoji: "🗓️",
        options: ["🔢 2", "🔢 3", "🔢 4", "🔢 6"],
        correct: 2,
        explanation: "Many places have 4 seasons: Spring, Summer, Autumn (Fall), and Winter."
      },
      {
        question: "What instrument measures wind speed?",
        emoji: "🌬️",
        options: ["🌡️ Thermometer", "📏 Barometer", "🌀 Anemometer", "☂️ Rain gauge"],
        correct: 2,
        explanation: "An anemometer measures wind speed. It has spinning cups that rotate faster in stronger winds."
      },
      {
        question: "During which season do trees lose their leaves in cold countries?",
        emoji: "🍂",
        options: ["🌸 Spring", "☀️ Summer", "🍂 Autumn", "❄️ Winter"],
        correct: 2,
        explanation: "Trees lose their leaves in Autumn to conserve water and energy for the cold winter ahead."
      },
      {
        question: "What do we use to measure how much rain has fallen?",
        emoji: "🌧️",
        options: ["🌡️ Thermometer", "☂️ Rain gauge", "🌬️ Anemometer", "📏 Ruler"],
        correct: 1,
        explanation: "A rain gauge is a container that collects and measures the amount of rainfall."
      },
      {
        question: "What causes wind?",
        emoji: "🌬️",
        options: [
          "Trees shaking their branches",
          "The movement of air from high pressure to low pressure areas",
          "The Moon's gravity",
          "Clouds moving across the sky"
        ],
        correct: 1,
        explanation: "Wind is caused by air moving from areas of high pressure to areas of low pressure."
      },
      {
        question: "Which season is usually the coldest?",
        emoji: "❄️",
        options: ["🌸 Spring", "☀️ Summer", "🍂 Autumn", "❄️ Winter"],
        correct: 3,
        explanation: "Winter is the coldest season, with the shortest days and lowest temperatures of the year."
      },
      {
        question: "What is a weather forecast?",
        emoji: "📺",
        options: [
          "A photo of clouds",
          "A prediction of what the weather will be like",
          "A tool to measure heat",
          "A map of the world"
        ],
        correct: 1,
        explanation: "A weather forecast predicts what the weather will be like in the coming hours or days."
      }
    ]
  }
];

/* =============================================
   QUIZ STATE VARIABLES
   ============================================= */
let currentQuestion = 0;
let score           = 0;
let answered        = false;
let answers         = [];
let selectedTopic   = null;
let timerInterval   = null;
let timeLeft        = 30; // seconds per question
const TIME_PER_Q    = 30;

/* =============================================
   SOUND ENGINE — Web Audio API
   ============================================= */
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) audioCtx = new AudioCtx();
  return audioCtx;
}
function playCorrectSound() {
  try {
    const ctx = getAudioCtx();
    [523, 659, 784, 1047].forEach((freq, i) => {
      const osc = ctx.createOscillator(), gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = 'sine'; osc.frequency.value = freq;
      const t = ctx.currentTime + i * 0.1;
      gain.gain.setValueAtTime(0.35, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
      osc.start(t); osc.stop(t + 0.25);
    });
  } catch(e) {}
}
function playWrongSound() {
  try {
    const ctx = getAudioCtx();
    [300, 220].forEach((freq, i) => {
      const osc = ctx.createOscillator(), gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = 'sawtooth'; osc.frequency.value = freq;
      const t = ctx.currentTime + i * 0.2;
      gain.gain.setValueAtTime(0.2, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
      osc.start(t); osc.stop(t + 0.35);
    });
  } catch(e) {}
}
function playCelebrationSound() {
  try {
    const ctx = getAudioCtx();
    const melody = [
      {freq:523,t:0.0,dur:0.15},{freq:659,t:0.15,dur:0.15},{freq:784,t:0.3,dur:0.15},
      {freq:1047,t:0.45,dur:0.3},{freq:784,t:0.8,dur:0.15},{freq:1047,t:0.95,dur:0.15},
      {freq:1319,t:1.1,dur:0.5}
    ];
    melody.forEach(({freq,t,dur}) => {
      const osc = ctx.createOscillator(), gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = 'sine'; osc.frequency.value = freq;
      const start = ctx.currentTime + t;
      gain.gain.setValueAtTime(0.4, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + dur);
      osc.start(start); osc.stop(start + dur + 0.05);
    });
    [523,659,784].forEach(freq => {
      const osc = ctx.createOscillator(), gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = 'triangle'; osc.frequency.value = freq;
      const start = ctx.currentTime + 1.1;
      gain.gain.setValueAtTime(0.15, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.8);
      osc.start(start); osc.stop(start + 0.85);
    });
  } catch(e) {}
}
function playTryAgainSound() {
  try {
    const ctx = getAudioCtx();
    [440,392,330].forEach((freq,i) => {
      const osc = ctx.createOscillator(), gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = 'sine'; osc.frequency.value = freq;
      const t = ctx.currentTime + i * 0.22;
      gain.gain.setValueAtTime(0.25, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.4);
      osc.start(t); osc.stop(t + 0.45);
    });
  } catch(e) {}
}
function playTimeoutSound() {
  try {
    const ctx = getAudioCtx();
    [500, 400, 300, 200].forEach((freq, i) => {
      const osc = ctx.createOscillator(), gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = 'square'; osc.frequency.value = freq;
      const t = ctx.currentTime + i * 0.12;
      gain.gain.setValueAtTime(0.15, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
      osc.start(t); osc.stop(t + 0.2);
    });
  } catch(e) {}
}

/* =============================================
   CONFETTI
   ============================================= */
function launchConfetti() {
  const colors = ['#2ECC71','#3498DB','#F1C40F','#E74C3C','#9B59B6','#E67E22','#1ABC9C','#FF69B4'];
  for (let i = 0; i < 130; i++) {
    const piece = document.createElement('div');
    const size  = 6 + Math.random() * 9;
    piece.style.cssText = `position:fixed;width:${size}px;height:${size}px;background:${colors[Math.floor(Math.random()*colors.length)]};border-radius:${Math.random()>0.5?'50%':'3px'};left:${Math.random()*100}vw;top:-20px;z-index:9999;pointer-events:none;animation:confettiFall ${1.4+Math.random()*2}s ease-in forwards;animation-delay:${Math.random()*0.8}s;`;
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 3600);
  }
}
(function() {
  if (document.getElementById('confetti-style')) return;
  const s = document.createElement('style');
  s.id = 'confetti-style';
  s.textContent = `
    @keyframes confettiFall {
      0%   { transform:translateY(0) rotate(0deg) scale(1); opacity:1; }
      80%  { opacity:1; }
      100% { transform:translateY(100vh) rotate(720deg) scale(0.5); opacity:0; }
    }
    @keyframes scorePop {
      0%   { transform:scale(0.4); opacity:0; }
      65%  { transform:scale(1.25); }
      100% { transform:scale(1);   opacity:1; }
    }
    @keyframes glowPulse {
      0%,100% { box-shadow:0 0 0 0 rgba(46,204,113,0.6); }
      50%     { box-shadow:0 0 0 22px rgba(46,204,113,0); }
    }
    @keyframes bannerBounce {
      0%,100% { transform:scale(1); }
      50%     { transform:scale(1.04); }
    }
    @keyframes timerPulse {
      0%,100% { transform:scale(1); }
      50%     { transform:scale(1.08); color:#e74c3c; }
    }
    .score-circle.celebrate {
      animation: scorePop 0.65s ease forwards, glowPulse 1.2s ease 0.65s infinite !important;
    }
    #celebration-banner {
      font-family:'Fredoka One',cursive;
      font-size:1.35rem;
      background:linear-gradient(135deg,#F1C40F,#E67E22);
      color:#fff;
      border-radius:50px;
      padding:14px 28px;
      margin:0 auto 20px;
      display:none;
      text-align:center;
      animation:bannerBounce 0.9s ease infinite;
      box-shadow:0 6px 20px rgba(241,196,15,0.5);
      max-width:480px;
      text-shadow:1px 1px 3px rgba(0,0,0,0.2);
    }
    /* ---- TOPIC SELECTION ---- */
    #topic-select-screen {
      display: none;
    }
    #topic-select-screen.show {
      display: block;
    }
    .topic-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 16px;
      margin: 24px 0;
    }
    .topic-card {
      background: white;
      border-radius: 18px;
      padding: 24px 16px;
      text-align: center;
      cursor: pointer;
      box-shadow: 0 4px 16px rgba(0,0,0,0.09);
      border: 3px solid transparent;
      transition: all 0.22s ease;
      font-family: 'Fredoka One', cursive;
    }
    .topic-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 28px rgba(0,0,0,0.16);
    }
    .topic-card .t-emoji {
      font-size: 2.6rem;
      margin-bottom: 10px;
      display: block;
    }
    .topic-card .t-label {
      font-size: 1rem;
      color: #2c3e50;
      font-weight: 700;
      line-height: 1.3;
    }
    /* ---- TIMER ---- */
    .timer-row {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 12px;
    }
    .timer-circle {
      min-width: 52px;
      height: 52px;
      border-radius: 50%;
      background: #eafaf1;
      border: 3px solid #2ECC71;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Fredoka One', cursive;
      font-size: 1.25rem;
      color: #27ae60;
      transition: border-color 0.3s, background 0.3s, color 0.3s;
    }
    .timer-circle.warning {
      border-color: #e67e22;
      background: #fef9f0;
      color: #e67e22;
      animation: timerPulse 0.5s ease infinite;
    }
    .timer-circle.danger {
      border-color: #e74c3c;
      background: #fdf0ef;
      color: #e74c3c;
      animation: timerPulse 0.35s ease infinite;
    }
    .timer-track {
      flex: 1;
      height: 10px;
      background: #eee;
      border-radius: 99px;
      overflow: hidden;
    }
    .timer-fill {
      height: 100%;
      border-radius: 99px;
      background: #2ECC71;
      transition: width 1s linear, background 0.3s;
    }
    /* topic badge in quiz */
    .topic-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 5px 14px;
      border-radius: 99px;
      font-family: 'Fredoka One', cursive;
      font-size: 0.88rem;
      color: white;
      margin-bottom: 14px;
    }
  `;
  document.head.appendChild(s);
})();

/* =============================================
   TOPIC SELECTION
   ============================================= */
function showTopicSelection() {
  const quizEl         = document.getElementById('quiz-container');
  const progressEl     = document.querySelector('.quiz-progress');
  const topicScreen    = document.getElementById('topic-select-screen');
  const scoreScreen    = document.getElementById('score-screen');

  if (scoreScreen)    scoreScreen.classList.remove('show');
  if (progressEl)     progressEl.style.display = 'none';
  if (quizEl)         quizEl.style.display = 'none';
  if (topicScreen)    topicScreen.classList.add('show');
}

function buildTopicScreen() {
  const container = document.getElementById('quiz-container');
  if (!container) return;

  // Insert topic screen before quiz container if it doesn't exist
  if (!document.getElementById('topic-select-screen')) {
    const div = document.createElement('div');
    div.id = 'topic-select-screen';
    container.parentNode.insertBefore(div, container);
  }

  const screen = document.getElementById('topic-select-screen');
  screen.innerHTML = `
    <div style="
      background: white;
      border-radius: 20px;
      padding: 32px 28px;
      box-shadow: 0 8px 24px rgba(46,204,113,0.15);
      text-align: center;
    ">
      <div style="font-size:2.4rem; margin-bottom:8px;">📚</div>
      <h2 style="font-family:'Fredoka One',cursive; color:#27AE60; font-size:1.7rem; margin-bottom:6px;">
        Choose Your Topic
      </h2>
      <p style="color:#5a7a5a; font-size:1rem; margin-bottom:0;">
        Pick a topic below to start your 10-question quiz.<br/>
        You have <strong>30 seconds</strong> to answer each question! ⏱️
      </p>
      <div class="topic-grid">
        ${topicBanks.map(t => `
          <div class="topic-card" onclick="startTopic('${t.id}')"
               style="border-color:${t.color}20;">
            <span class="t-emoji">${t.emoji}</span>
            <span class="t-label">${t.label}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  screen.classList.add('show');
}

function startTopic(topicId) {
  selectedTopic   = topicBanks.find(t => t.id === topicId);
  currentQuestion = 0;
  score           = 0;
  answered        = false;
  answers         = [];

  const topicScreen = document.getElementById('topic-select-screen');
  const quizEl      = document.getElementById('quiz-container');
  const progressEl  = document.querySelector('.quiz-progress');

  if (topicScreen) topicScreen.classList.remove('show');
  if (quizEl)      quizEl.style.display = 'block';
  if (progressEl)  progressEl.style.display = 'flex';

  const liveScore = document.getElementById('live-score');
  if (liveScore) liveScore.textContent = '⭐ Score: 0';

  renderQuestion();
}

/* =============================================
   TIMER
   ============================================= */
function startTimer() {
  stopTimer();
  timeLeft = TIME_PER_Q;
  updateTimerUI();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerUI();
    if (timeLeft <= 0) {
      stopTimer();
      autoSubmitTimeout();
    }
  }, 1000);
}

function stopTimer() {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
}

function updateTimerUI() {
  const circle = document.getElementById('timer-circle');
  const fill   = document.getElementById('timer-fill');
  if (!circle || !fill) return;

  circle.textContent = timeLeft;
  const pct = (timeLeft / TIME_PER_Q) * 100;
  fill.style.width = pct + '%';

  if (timeLeft <= 5) {
    circle.className = 'timer-circle danger';
    fill.style.background = '#e74c3c';
  } else if (timeLeft <= 12) {
    circle.className = 'timer-circle warning';
    fill.style.background = '#e67e22';
  } else {
    circle.className = 'timer-circle';
    fill.style.background = '#2ECC71';
  }
}

function autoSubmitTimeout() {
  if (answered) return;
  answered = true;
  playTimeoutSound();

  const q       = selectedTopic.questions[currentQuestion];
  const buttons = document.querySelectorAll('.option-btn');
  const feedbackBox = document.getElementById('feedback-box');

  buttons.forEach(btn => btn.disabled = true);
  if (buttons[q.correct]) buttons[q.correct].classList.add('correct');

  answers.push({
    questionText: q.question,
    chosenLabel:  '⏰ Time ran out!',
    correctLabel: q.options[q.correct],
    isCorrect:    false,
    timedOut:     true
  });

  if (feedbackBox) {
    feedbackBox.className = 'feedback-box wrong-fb show';
    feedbackBox.innerHTML = `<span>⏰</span> Time's up! The answer was: <strong>${q.options[q.correct]}</strong>. ${q.explanation}`;
  }

  const liveScore = document.getElementById('live-score');
  if (liveScore) liveScore.textContent = `⭐ Score: ${score}`;

  setTimeout(() => {
    currentQuestion++;
    renderQuestion();
  }, 2800);
}

/* =============================================
   QUIZ FUNCTIONS
   ============================================= */
function initQuiz() {
  const quizEl = document.getElementById('quiz-container');
  if (!quizEl) return;
  buildTopicScreen();
  showTopicSelection();
}

function renderQuestion() {
  const container    = document.getElementById('quiz-container');
  const scoreScreen  = document.getElementById('score-screen');
  const progressFill = document.getElementById('progress-fill');
  const progressText = document.getElementById('progress-text');

  if (!selectedTopic) { showTopicSelection(); return; }

  const questions = selectedTopic.questions;

  if (currentQuestion >= questions.length) {
    stopTimer();
    container.style.display = 'none';
    scoreScreen.classList.add('show');
    showFinalScore();
    return;
  }

  answered = false;
  const q   = questions[currentQuestion];
  const pct = (currentQuestion / questions.length) * 100;

  if (progressFill) progressFill.style.width = pct + '%';
  if (progressText) progressText.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;

  const liveScore = document.getElementById('live-score');
  if (liveScore) liveScore.textContent = `⭐ Score: ${score}`;

  container.innerHTML = `
    <div class="question-card">
      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap; margin-bottom:10px;">
        <span class="topic-badge" style="background:${selectedTopic.color};">
          ${selectedTopic.emoji} ${selectedTopic.label}
        </span>
      </div>

      <!-- TIMER -->
      <div class="timer-row">
        <div class="timer-circle" id="timer-circle">${TIME_PER_Q}</div>
        <div class="timer-track">
          <div class="timer-fill" id="timer-fill" style="width:100%;"></div>
        </div>
        <span style="font-size:0.85rem; color:#888; white-space:nowrap;">⏱️ seconds</span>
      </div>

      <div class="question-number">Question ${currentQuestion + 1} of ${questions.length}</div>
      <div class="question-text">${q.emoji} ${q.question}</div>
      <div class="options-grid" id="options-grid">
        ${q.options.map((opt, i) => `
          <button class="option-btn" onclick="selectAnswer(${i})">
            <span class="opt-letter">${['A','B','C','D'][i]}</span> ${opt}
          </button>
        `).join('')}
      </div>
      <div class="feedback-box" id="feedback-box"></div>
    </div>
  `;

  startTimer();
}

function selectAnswer(chosenIndex) {
  if (answered) return;
  answered = true;
  stopTimer();

  const q           = selectedTopic.questions[currentQuestion];
  const buttons     = document.querySelectorAll('.option-btn');
  const feedbackBox = document.getElementById('feedback-box');

  buttons.forEach(btn => btn.disabled = true);

  answers.push({
    questionText: q.question,
    chosenLabel:  q.options[chosenIndex],
    correctLabel: q.options[q.correct],
    isCorrect:    chosenIndex === q.correct,
    timedOut:     false
  });

  if (chosenIndex === q.correct) {
    score++;
    buttons[chosenIndex].classList.add('correct');
    feedbackBox.className = 'feedback-box correct-fb show';
    feedbackBox.innerHTML = `<span>✅</span> Correct! ${q.explanation}`;
    playCorrectSound();
  } else {
    buttons[chosenIndex].classList.add('wrong');
    buttons[q.correct].classList.add('correct');
    feedbackBox.className = 'feedback-box wrong-fb show';
    feedbackBox.innerHTML = `<span>❌</span> Not quite! ${q.explanation}`;
    playWrongSound();
  }

  const liveScore = document.getElementById('live-score');
  if (liveScore) liveScore.textContent = `⭐ Score: ${score}`;

  setTimeout(() => {
    currentQuestion++;
    renderQuestion();
  }, 2800);
}

function showFinalScore() {
  const total  = selectedTopic.questions.length;
  const pct    = Math.round((score / total) * 100);
  const passed = pct >= 50;

  document.getElementById('score-num').textContent = `${score}/${total}`;

  const circle = document.querySelector('.score-circle');
  if (circle) {
    circle.classList.remove('celebrate');
    void circle.offsetWidth;
    if (passed) circle.classList.add('celebrate');
  }

  const fill = document.getElementById('accuracy-fill');
  if (fill) {
    fill.style.width = '0%';
    setTimeout(() => {
      fill.style.width      = pct + '%';
      fill.style.background = pct >= 70 ? '#27ae60' : pct >= 50 ? '#e67e22' : '#e74c3c';
    }, 250);
  }

  const pctLabel = document.getElementById('accuracy-label');
  if (pctLabel) pctLabel.textContent = pct + '% correct';

  let message, emoji, bannerMsg;
  if (pct === 100) {
    emoji='🏆🌟🎉'; message='PERFECT SCORE! You are an absolute Science Superstar! AMAZING! 🌟🌟🌟';
    bannerMsg='🎊 WOW! 100%! YOU ARE INCREDIBLE! 🎊';
  } else if (pct >= 70) {
    emoji='🎉👏😊'; message='FANTASTIC! You passed with flying colours! Keep shining bright! ✨';
    bannerMsg='🥳 BRILLIANT! YOU PASSED! WELL DONE! 🥳';
  } else if (pct >= 50) {
    emoji='😊📚👍'; message='Great effort — you passed! Study a little more and you will be AMAZING next time!';
    bannerMsg='✅ YOU PASSED! KEEP IT UP! ✅';
  } else {
    emoji='📖💪🌱'; message='Keep practising! Review the topics and try again. You CAN do it! 💪';
    bannerMsg=null;
  }

  document.getElementById('score-emoji').textContent   = emoji;
  document.getElementById('score-message').textContent = message;

  // Topic badge on score screen
  const topicBadgeEl = document.getElementById('score-topic-badge');
  if (topicBadgeEl) {
    topicBadgeEl.innerHTML = `<span class="topic-badge" style="background:${selectedTopic.color};">${selectedTopic.emoji} ${selectedTopic.label}</span>`;
  }

  const banner = document.getElementById('celebration-banner');
  if (banner) {
    banner.textContent   = bannerMsg || '';
    banner.style.display = bannerMsg ? 'block' : 'none';
  }

  const starsEl = document.getElementById('score-stars');
  if (starsEl) {
    const ratio = score / total;
    starsEl.textContent =
      ratio === 1  ? '⭐⭐⭐⭐⭐' :
      ratio >= 0.8 ? '⭐⭐⭐⭐'   :
      ratio >= 0.6 ? '⭐⭐⭐'     :
      ratio >= 0.4 ? '⭐⭐'       : '⭐';
  }

  if (passed) {
    playCelebrationSound(); launchConfetti();
    if (pct === 100) setTimeout(launchConfetti, 1800);
  } else {
    playTryAgainSound();
  }

  const breakdown = document.getElementById('score-breakdown');
  if (breakdown) {
    breakdown.innerHTML = answers.map(a => `
      <div class="bd-row">
        <span class="bd-icon ${a.isCorrect ? 'ok' : 'bad'}">${a.timedOut ? '⏰' : (a.isCorrect ? '✓' : '✗')}</span>
        <span class="bd-qtext">${a.questionText}</span>
        <span class="bd-ans">
          ${a.isCorrect
            ? `${a.correctLabel} ✅`
            : a.timedOut
              ? `<em>Timed out</em> · Answer: ${a.correctLabel.replace(/^[^ ]+ /,'')}`
              : `You said: ${a.chosenLabel.replace(/^[^ ]+ /,'')} · Answer: ${a.correctLabel.replace(/^[^ ]+ /,'')}`}
        </span>
      </div>
    `).join('');
  }
}

function restartQuiz() {
  stopTimer();
  currentQuestion = 0; score = 0; answered = false; answers = [];

  const circle = document.querySelector('.score-circle');
  if (circle) circle.classList.remove('celebrate');

  const banner = document.getElementById('celebration-banner');
  if (banner) banner.style.display = 'none';

  const container   = document.getElementById('quiz-container');
  const scoreScreen = document.getElementById('score-screen');
  scoreScreen.classList.remove('show');
  container.style.display = 'block';

  const progressFill = document.getElementById('progress-fill');
  if (progressFill) progressFill.style.width = '0%';

  const liveScore = document.getElementById('live-score');
  if (liveScore) liveScore.textContent = '⭐ Score: 0';

  // Go back to topic selection
  selectedTopic = null;
  showTopicSelection();
}

/* =============================================
   FUN PAGE — Random Science Fact Machine
   ============================================= */
const scienceFacts = [
  "🦋 A butterfly tastes food with its feet!",
  "🌊 The ocean covers more than 70% of the Earth!",
  "🦷 Human teeth are as strong as shark teeth!",
  "🌍 Earth is about 4.5 billion years old!",
  "🐘 An elephant's trunk has over 40,000 muscles!",
  "☀️ The Sun is so big, one million Earths can fit inside it!",
  "🦴 Babies are born with 270 bones, but adults have only 206!",
  "🌱 A single tree can produce enough oxygen for 2 people each day!",
  "🐝 Bees can recognise human faces!",
  "🌚 There is no sound in space — it is completely silent!",
  "🦒 A giraffe's tongue is about 45 cm long!",
  "💧 About 60% of the human body is made up of water!",
  "🌻 Sunflowers always face the direction of the sun!",
  "🐙 An octopus has three hearts!",
  "🍎 Apples float in water because they are 25% air!"
];
let lastFactIndex = -1;
function showRandomFact() {
  const display = document.getElementById('fact-display');
  if (!display) return;
  display.style.opacity = '0';
  setTimeout(() => {
    let idx;
    do { idx = Math.floor(Math.random() * scienceFacts.length); }
    while (idx === lastFactIndex);
    lastFactIndex = idx;
    display.textContent = scienceFacts[idx];
    display.style.opacity = '1';
  }, 300);
}

/* =============================================
   FUN PAGE — Word Scramble
   ============================================= */
const scrambleWords = [
  { word:'PLANT',  scrambled:'TNALP',  hint:'🌱 It grows in soil and needs sunlight' },
  { word:'HEART',  scrambled:'THEAR',  hint:'❤️ It pumps blood in your body' },
  { word:'WATER',  scrambled:'RAWET',  hint:'💧 We drink this every day' },
  { word:'ANIMAL', scrambled:'LAMINA', hint:'🐾 A living creature that can move' },
  { word:'OXYGEN', scrambled:'GYNEXO', hint:'🌬️ A gas that we breathe in' },
  { word:'LUNGS',  scrambled:'GNSLU',  hint:'🫁 Organs used for breathing' },
  { word:'FLOWER', scrambled:'REWOLF', hint:'🌸 The colourful part of a plant' },
  { word:'BONES',  scrambled:'SENOB',  hint:'🦴 Hard parts inside your body' }
];
let currentScramble = 0;
function initScramble() {
  const el = document.getElementById('scrambled-word');
  if (!el) return;
  currentScramble = Math.floor(Math.random() * scrambleWords.length);
  el.textContent = scrambleWords[currentScramble].scrambled;
  const hintEl = document.getElementById('scramble-hint');
  if (hintEl) hintEl.textContent = scrambleWords[currentScramble].hint;
  document.getElementById('scramble-result').textContent = '';
  const input = document.getElementById('scramble-input');
  if (input) { input.value = ''; input.focus(); }
}
function checkScramble() {
  const input  = document.getElementById('scramble-input');
  const result = document.getElementById('scramble-result');
  if (!input || !result) return;
  const guess  = input.value.trim().toUpperCase();
  const answer = scrambleWords[currentScramble].word;
  if (guess === answer) {
    result.textContent = '✅ Brilliant! You got it right!';
    result.style.color = '#27ae60';
    setTimeout(() => nextScramble(), 1600);
  } else if (guess.length === 0) {
    result.textContent = '💡 Type your answer first!';
    result.style.color = '#e67e22';
  } else {
    result.textContent = '❌ Not quite! Try again! 💪';
    result.style.color = '#e74c3c';
    input.value = '';
    input.focus();
  }
}
function nextScramble() {
  let idx;
  do { idx = Math.floor(Math.random() * scrambleWords.length); }
  while (idx === currentScramble && scrambleWords.length > 1);
  currentScramble = idx;
  const el = document.getElementById('scrambled-word');
  const hintEl = document.getElementById('scramble-hint');
  if (el) el.textContent = scrambleWords[currentScramble].scrambled;
  if (hintEl) hintEl.textContent = scrambleWords[currentScramble].hint;
  document.getElementById('scramble-result').textContent = '';
  const input = document.getElementById('scramble-input');
  if (input) { input.value = ''; input.focus(); }
}
function scrambleKeyPress(e) {
  if (e.key === 'Enter') checkScramble();
}

/* =============================================
   INIT
   ============================================= */
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    if (link.href === window.location.href) link.classList.add('active');
  });
  initQuiz();
  if (document.getElementById('fact-display')) showRandomFact();
  initScramble();
});