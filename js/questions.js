// Question database
const questionDatabase = {
    "Class 1-5": {
        Mathematics: {
            easy: [
                { text: "What is 5 + 7?", options: ["10", "11", "12", "13"], correctAnswer: 2 },
                { text: "What is 15 - 8?", options: ["5", "6", "7", "8"], correctAnswer: 2 },
                { text: "What is 3 × 4?", options: ["7", "10", "12", "15"], correctAnswer: 2 },
                { text: "What is 20 ÷ 5?", options: ["2", "3", "4", "5"], correctAnswer: 2 },
                { text: "What is the square of 5?", options: ["10", "15", "20", "25"], correctAnswer: 3 }
            ],
            medium: [
                { text: "What is 15% of 200?", options: ["15", "20", "25", "30"], correctAnswer: 3 },
                { text: "Solve for x: 2x + 5 = 15", options: ["3", "4", "5", "6"], correctAnswer: 2 },
                { text: "What is the area of a rectangle with length 8 and width 5?", options: ["13", "26", "40", "45"], correctAnswer: 2 },
                { text: "What is 3/4 of 80?", options: ["50", "55", "60", "65"], correctAnswer: 2 },
                { text: "What is the value of π (pi) to two decimal places?", options: ["3.12", "3.14", "3.16", "3.18"], correctAnswer: 1 }
            ],
            hard: [
                { text: "What is the derivative of x²?", options: ["x", "2x", "2", "x²"], correctAnswer: 1 },
                { text: "What is the value of sin(90°)?", options: ["0", "0.5", "1", "2"], correctAnswer: 2 },
                { text: "What is the integral of 2x dx?", options: ["x", "x²", "2x", "2x²"], correctAnswer: 1 },
                { text: "What is the Pythagorean theorem?", options: ["a+b=c", "a²+b²=c²", "a×b=c", "a/b=c"], correctAnswer: 1 },
                { text: "What is the value of log₁₀(100)?", options: ["1", "2", "10", "100"], correctAnswer: 1 }
            ]
        },
        Science: {
            easy: [
                { text: "What planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correctAnswer: 1 },
                { text: "What is H₂O?", options: ["Oxygen", "Hydrogen", "Water", "Carbon Dioxide"], correctAnswer: 2 },
                { text: "What gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correctAnswer: 2 },
                { text: "How many bones are in the adult human body?", options: ["106", "196", "206", "306"], correctAnswer: 2 },
                { text: "What is the closest star to Earth?", options: ["Proxima Centauri", "Sirius", "The Sun", "Alpha Centauri"], correctAnswer: 2 }
            ],
            medium: [
                { text: "What is the atomic number of carbon?", options: ["6", "8", "12", "14"], correctAnswer: 0 },
                { text: "What is Newton's first law of motion?", options: ["F=ma", "Action and reaction", "Inertia", "Gravity"], correctAnswer: 2 },
                { text: "What is the pH of pure water?", options: ["5", "6", "7", "8"], correctAnswer: 2 },
                { text: "What is the most abundant element in the universe?", options: ["Oxygen", "Carbon", "Hydrogen", "Helium"], correctAnswer: 2 },
                { text: "What is the unit of electrical resistance?", options: ["Volt", "Ampere", "Ohm", "Watt"], correctAnswer: 2 }
            ],
            hard: [
                { text: "What is the Heisenberg Uncertainty Principle?", options: ["Energy cannot be created or destroyed", 
                         "It's impossible to know both position and momentum of a particle exactly",
                         "Every action has an equal and opposite reaction",
                         "The entropy of the universe always increases"], correctAnswer: 1 },
                { text: "What is Schrödinger's cat thought experiment about?", options: ["Relativity", "Quantum superposition", "Evolution", "Thermodynamics"], correctAnswer: 1 },
                { text: "What is the formula for general relativity?", options: ["E=mc²", "F=ma", "Gμν = 8πG Tμν", "∇·E = ρ/ε₀"], correctAnswer: 2 },
                { text: "What is the Pauli Exclusion Principle?", options: ["No two electrons can have the same quantum state",
                         "Energy is quantized",
                         "Light behaves as both particle and wave",
                         "The universe is expanding"], correctAnswer: 0 },
                { text: "What is the second law of thermodynamics?", options: ["Energy cannot be created or destroyed",
                         "The entropy of an isolated system never decreases",
                         "Absolute zero cannot be reached",
                         "Heat flows from hot to cold"], correctAnswer: 1 }
            ]
        },
        English: {
            easy: [
                { text: "Which word is a noun?", options: ["run", "beautiful", "book", "quickly"], correctAnswer: 2 },
                { text: "What is the past tense of 'go'?", options: ["goed", "went", "gone", "going"], correctAnswer: 1 },
                { text: "Which of these is a vowel?", options: ["b", "c", "a", "t"], correctAnswer: 2 },
                { text: "What is the plural of 'child'?", options: ["childs", "children", "childes", "child"], correctAnswer: 1 },
                { text: "Which word rhymes with 'cat'?", options: ["dog", "hat", "bird", "fish"], correctAnswer: 1 }
            ],
            medium: [
                { text: "What is a metaphor?", options: ["A comparison using 'like' or 'as'", "A direct comparison without 'like' or 'as'", "An exaggeration", "A sound word"], correctAnswer: 1 },
                { text: "Which of these is a compound sentence?", options: ["The cat sat on the mat.", "The cat sat on the mat and the dog slept.", "Sitting on the mat, the cat purred.", "The cat, sitting on the mat, purred."], correctAnswer: 1 },
                { text: "What is the main idea of a story?", options: ["The most important point", "The setting", "The characters", "The plot"], correctAnswer: 0 },
                { text: "Which word is an adverb?", options: ["run", "beautiful", "quickly", "book"], correctAnswer: 2 },
                { text: "What is a protagonist?", options: ["The main character", "The villain", "A supporting character", "The narrator"], correctAnswer: 0 }
            ],
            hard: [
                { text: "What is iambic pentameter?", options: ["A poetic meter with five iambs per line", "A type of rhyme scheme", "A poetic form with 14 lines", "A type of sonnet"], correctAnswer: 0 },
                { text: "Who wrote 'Hamlet'?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], correctAnswer: 1 },
                { text: "What is a soliloquy?", options: ["A speech by a character alone on stage", "A conversation between two characters", "A speech to the audience", "A type of poem"], correctAnswer: 0 },
                { text: "What is the difference between 'affect' and 'effect'?", options: ["Affect is a verb, effect is a noun", "Effect is a verb, affect is a noun", "They are interchangeable", "Affect is always negative, effect is always positive"], correctAnswer: 0 },
                { text: "What is dramatic irony?", options: ["When the audience knows something the characters don't", "When a character says the opposite of what they mean", "When the outcome is the opposite of what was expected", "When there's a contradiction between what is said and what is meant"], correctAnswer: 0 }
            ]
        }
    },
    "Class 6-8": {
        Mathematics: {
            easy: [
                { text: "What is the value of 3² + 4²?", options: ["7", "12", "25", "49"], correctAnswer: 2 },
                { text: "What is 15% of 200?", options: ["15", "20", "25", "30"], correctAnswer: 3 },
                { text: "Solve for x: 2x + 5 = 15", options: ["3", "4", "5", "6"], correctAnswer: 2 },
                { text: "What is the area of a rectangle with length 8 and width 5?", options: ["13", "26", "40", "45"], correctAnswer: 2 },
                { text: "What is 3/4 of 80?", options: ["50", "55", "60", "65"], correctAnswer: 2 }
            ],
            medium: [
                { text: "What is the Pythagorean theorem?", options: ["a+b=c", "a²+b²=c²", "a×b=c", "a/b=c"], correctAnswer: 1 },
                { text: "What is the value of sin(90°)?", options: ["0", "0.5", "1", "2"], correctAnswer: 2 },
                { text: "What is the derivative of x²?", options: ["x", "2x", "2", "x²"], correctAnswer: 1 },
                { text: "What is the integral of 2x dx?", options: ["x", "x²", "2x", "2x²"], correctAnswer: 1 },
                { text: "What is the value of log₁₀(100)?", options: ["1", "2", "10", "100"], correctAnswer: 1 }
            ],
            hard: [
                { text: "What is the Heisenberg Uncertainty Principle?", options: ["Energy cannot be created or destroyed", 
                         "It's impossible to know both position and momentum of a particle exactly",
                         "Every action has an equal and opposite reaction",
                         "The entropy of the universe always increases"], correctAnswer: 1 },
                { text: "What is Schrödinger's cat thought experiment about?", options: ["Relativity", "Quantum superposition", "Evolution", "Thermodynamics"], correctAnswer: 1 },
                { text: "What is the formula for general relativity?", options: ["E=mc²", "F=ma", "Gμν = 8πG Tμν", "∇·E = ρ/ε₀"], correctAnswer: 2 },
                { text: "What is the Pauli Exclusion Principle?", options: ["No two electrons can have the same quantum state",
                         "Energy is quantized",
                         "Light behaves as both particle and wave",
                         "The universe is expanding"], correctAnswer: 0 },
                { text: "What is the second law of thermodynamics?", options: ["Energy cannot be created or destroyed",
                         "The entropy of an isolated system never decreases",
                         "Absolute zero cannot be reached",
                         "Heat flows from hot to cold"], correctAnswer: 1 }
            ]
        },
        Science: {
            easy: [
                { text: "What is the atomic number of carbon?", options: ["6", "8", "12", "14"], correctAnswer: 0 },
                { text: "What is Newton's first law of motion?", options: ["F=ma", "Action and reaction", "Inertia", "Gravity"], correctAnswer: 2 },
                { text: "What is the pH of pure water?", options: ["5", "6", "7", "8"], correctAnswer: 2 },
                { text: "What is the most abundant element in the universe?", options: ["Oxygen", "Carbon", "Hydrogen", "Helium"], correctAnswer: 2 },
                { text: "What is the unit of electrical resistance?", options: ["Volt", "Ampere", "Ohm", "Watt"], correctAnswer: 2 }
            ],
            medium: [
                { text: "What is the Heisenberg Uncertainty Principle?", options: ["Energy cannot be created or destroyed", 
                         "It's impossible to know both position and momentum of a particle exactly",
                         "Every action has an equal and opposite reaction",
                         "The entropy of the universe always increases"], correctAnswer: 1 },
                { text: "What is Schrödinger's cat thought experiment about?", options: ["Relativity", "Quantum superposition", "Evolution", "Thermodynamics"], correctAnswer: 1 },
                { text: "What is the formula for general relativity?", options: ["E=mc²", "F=ma", "Gμν = 8πG Tμν", "∇·E = ρ/ε₀"], correctAnswer: 2 },
                { text: "What is the Pauli Exclusion Principle?", options: ["No two electrons can have the same quantum state",
                         "Energy is quantized",
                         "Light behaves as both particle and wave",
                         "The universe is expanding"], correctAnswer: 0 },
                { text: "What is the second law of thermodynamics?", options: ["Energy cannot be created or destroyed",
                         "The entropy of an isolated system never decreases",
                         "Absolute zero cannot be reached",
                         "Heat flows from hot to cold"], correctAnswer: 1 }
            ],
            hard: [
                { text: "What is the Heisenberg Uncertainty Principle?", options: ["Energy cannot be created or destroyed", 
                         "It's impossible to know both position and momentum of a particle exactly",
                         "Every action has an equal and opposite reaction",
                         "The entropy of the universe always increases"], correctAnswer: 1 },
                { text: "What is Schrödinger's cat thought experiment about?", options: ["Relativity", "Quantum superposition", "Evolution", "Thermodynamics"], correctAnswer: 1 },
                { text: "What is the formula for general relativity?", options: ["E=mc²", "F=ma", "Gμν = 8πG Tμν", "∇·E = ρ/ε₀"], correctAnswer: 2 },
                { text: "What is the Pauli Exclusion Principle?", options: ["No two electrons can have the same quantum state",
                         "Energy is quantized",
                         "Light behaves as both particle and wave",
                         "The universe is expanding"], correctAnswer: 0 },
                { text: "What is the second law of thermodynamics?", options: ["Energy cannot be created or destroyed",
                         "The entropy of an isolated system never decreases",
                         "Absolute zero cannot be reached",
                         "Heat flows from hot to cold"], correctAnswer: 1 }
            ]
        },
        English: {
            easy: [
                { text: "What is a noun?", options: ["A person, place, or thing", "An action word", "A describing word", "A word that replaces a noun"], correctAnswer: 0 },
                { text: "What is a verb?", options: ["A person, place, or thing", "An action word", "A describing word", "A word that replaces a noun"], correctAnswer: 1 },
                { text: "What is an adjective?", options: ["A person, place, or thing", "An action word", "A describing word", "A word that replaces a noun"], correctAnswer: 2 },
                { text: "What is a pronoun?", options: ["A person, place, or thing", "An action word", "A describing word", "A word that replaces a noun"], correctAnswer: 3 },
                { text: "What is the past tense of 'go'?", options: ["goed", "went", "gone", "going"], correctAnswer: 1 }
            ],
            medium: [
                { text: "What is a metaphor?", options: ["A comparison using 'like' or 'as'", "A direct comparison without 'like' or 'as'", "An exaggeration", "A sound word"], correctAnswer: 1 },
                { text: "What is a simile?", options: ["A comparison using 'like' or 'as'", "A direct comparison without 'like' or 'as'", "An exaggeration", "A sound word"], correctAnswer: 0 },
                { text: "What is personification?", options: ["Giving human qualities to non-human things", "A comparison using 'like' or 'as'", "An exaggeration", "A repeated sound"], correctAnswer: 0 },
                { text: "What is hyperbole?", options: ["An exaggeration", "A comparison using 'like' or 'as'", "A direct comparison without 'like' or 'as'", "A sound word"], correctAnswer: 0 },
                { text: "What is onomatopoeia?", options: ["A word that sounds like what it means", "A comparison using 'like' or 'as'", "A direct comparison without 'like' or 'as'", "An exaggeration"], correctAnswer: 0 }
            ],
            hard: [
                { text: "What is iambic pentameter?", options: ["A poetic meter with five iambs per line", "A type of rhyme scheme", "A poetic form with 14 lines", "A type of sonnet"], correctAnswer: 0 },
                { text: "Who wrote 'Hamlet'?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], correctAnswer: 1 },
                { text: "What is a soliloquy?", options: ["A speech by a character alone on stage", "A conversation between two characters", "A speech to the audience", "A type of poem"], correctAnswer: 0 },
                { text: "What is the difference between 'affect' and 'effect'?", options: ["Affect is a verb, effect is a noun", "Effect is a verb, affect is a noun", "They are interchangeable", "Affect is always negative, effect is always positive"], correctAnswer: 0 },
                { text: "What is dramatic irony?", options: ["When the audience knows something the characters don't", "When a character says the opposite of what they mean", "When the outcome is the opposite of what was expected", "When there's a contradiction between what is said and what is meant"], correctAnswer: 0 }
            ]
        }
    },
    "Class 9-12": {
        Mathematics: {
            easy: [
                { text: "What is the value of 3² + 4²?", options: ["7", "12", "25", "49"], correctAnswer: 2 },
                { text: "What is 15% of 200?", options: ["15", "20", "25", "30"], correctAnswer: 3 },
                { text: "Solve for x: 2x + 5 = 15", options: ["3", "4", "5", "6"], correctAnswer: 2 },
                { text: "What is the area of a rectangle with length 8 and width 5?", options: ["13", "26", "40", "45"], correctAnswer: 2 },
                { text: "What is 3/4 of 80?", options: ["50", "55", "60", "65"], correctAnswer: 2 }
            ],
            medium: [
                { text: "What is the Pythagorean theorem?", options: ["a+b=c", "a²+b²=c²", "a×b=c", "a/b=c"], correctAnswer: 1 },
                { text: "What is the value of sin(90°)?", options: ["0", "0.5", "1", "2"], correctAnswer: 2 },
                { text: "What is the derivative of x²?", options: ["x", "2x", "2", "x²"], correctAnswer: 1 },
                { text: "What is the integral of 2x dx?", options: ["x", "x²", "2x", "2x²"], correctAnswer: 1 },
                { text: "What is the value of log₁₀(100)?", options: ["1", "2", "10", "100"], correctAnswer: 1 }
            ],
            hard: [
                { text: "What is the Heisenberg Uncertainty Principle?", options: ["Energy cannot be created or destroyed", 
                         "It's impossible to know both position and momentum of a particle exactly",
                         "Every action has an equal and opposite reaction",
                         "The entropy of the universe always increases"], correctAnswer: 1 },
                { text: "What is Schrödinger's cat thought experiment about?", options: ["Relativity", "Quantum superposition", "Evolution", "Thermodynamics"], correctAnswer: 1 },
                { text: "What is the formula for general relativity?", options: ["E=mc²", "F=ma", "Gμν = 8πG Tμν", "∇·E = ρ/ε₀"], correctAnswer: 2 },
                { text: "What is the Pauli Exclusion Principle?", options: ["No two electrons can have the same quantum state",
                         "Energy is quantized",
                         "Light behaves as both particle and wave",
                         "The universe is expanding"], correctAnswer: 0 },
                { text: "What is the second law of thermodynamics?", options: ["Energy cannot be created or destroyed",
                         "The entropy of an isolated system never decreases",
                         "Absolute zero cannot be reached",
                         "Heat flows from hot to cold"], correctAnswer: 1 }
            ]
        },
        Science: {
            easy: [
                { text: "What is the atomic number of carbon?", options: ["6", "8", "12", "14"], correctAnswer: 0 },
                { text: "What is Newton's first law of motion?", options: ["F=ma", "Action and reaction", "Inertia", "Gravity"], correctAnswer: 2 },
                { text: "What is the pH of pure water?", options: ["5", "6", "7", "8"], correctAnswer: 2 },
                { text: "What is the most abundant element in the universe?", options: ["Oxygen", "Carbon", "Hydrogen", "Helium"], correctAnswer: 2 },
                { text: "What is the unit of electrical resistance?", options: ["Volt", "Ampere", "Ohm", "Watt"], correctAnswer: 2 }
            ],
            medium: [
                { text: "What is the Heisenberg Uncertainty Principle?", options: ["Energy cannot be created or destroyed", 
                         "It's impossible to know both position and momentum of a particle exactly",
                         "Every action has an equal and opposite reaction",
                         "The entropy of the universe always increases"], correctAnswer: 1 },
                { text: "What is Schrödinger's cat thought experiment about?", options: ["Relativity", "Quantum superposition", "Evolution", "Thermodynamics"], correctAnswer: 1 },
                { text: "What is the formula for general relativity?", options: ["E=mc²", "F=ma", "Gμν = 8πG Tμν", "∇·E = ρ/ε₀"], correctAnswer: 2 },
                { text: "What is the Pauli Exclusion Principle?", options: ["No two electrons can have the same quantum state",
                         "Energy is quantized",
                         "Light behaves as both particle and wave",
                         "The universe is expanding"], correctAnswer: 0 },
                { text: "What is the second law of thermodynamics?", options: ["Energy cannot be created or destroyed",
                         "The entropy of an isolated system never decreases",
                         "Absolute zero cannot be reached",
                         "Heat flows from hot to cold"], correctAnswer: 1 }
            ],
            hard: [
                { text: "What is the Heisenberg Uncertainty Principle?", options: ["Energy cannot be created or destroyed", 
                         "It's impossible to know both position and momentum of a particle exactly",
                         "Every action has an equal and opposite reaction",
                         "The entropy of the universe always increases"], correctAnswer: 1 },
                { text: "What is Schrödinger's cat thought experiment about?", options: ["Relativity", "Quantum superposition", "Evolution", "Thermodynamics"], correctAnswer: 1 },
                { text: "What is the formula for general relativity?", options: ["E=mc²", "F=ma", "Gμν = 8πG Tμν", "∇·E = ρ/ε₀"], correctAnswer: 2 },
                { text: "What is the Pauli Exclusion Principle?", options: ["No two electrons can have the same quantum state",
                         "Energy is quantized",
                         "Light behaves as both particle and wave",
                         "The universe is expanding"], correctAnswer: 0 },
                { text: "What is the second law of thermodynamics?", options: ["Energy cannot be created or destroyed",
                         "The entropy of an isolated system never decreases",
                         "Absolute zero cannot be reached",
                         "Heat flows from hot to cold"], correctAnswer: 1 }
            ]
        },
        English: {
            easy: [
                { text: "What is a noun?", options: ["A person, place, or thing", "An action word", "A describing word", "A word that replaces a noun"], correctAnswer: 0 },
                { text: "What is a verb?", options: ["A person, place, or thing", "An action word", "A describing word", "A word that replaces a noun"], correctAnswer: 1 },
                { text: "What is an adjective?", options: ["A person, place, or thing", "An action word", "A describing word", "A word that replaces a noun"], correctAnswer: 2 },
                { text: "What is a pronoun?", options: ["A person, place, or thing", "An action word", "A describing word", "A word that replaces a noun"], correctAnswer: 3 },
                { text: "What is the past tense of 'go'?", options: ["goed", "went", "gone", "going"], correctAnswer: 1 }
            ],
            medium: [
                { text: "What is a metaphor?", options: ["A comparison using 'like' or 'as'", "A direct comparison without 'like' or 'as'", "An exaggeration", "A sound word"], correctAnswer: 1 },
                { text: "What is a simile?", options: ["A comparison using 'like' or 'as'", "A direct comparison without 'like' or 'as'", "An exaggeration", "A sound word"], correctAnswer: 0 },
                { text: "What is personification?", options: ["Giving human qualities to non-human things", "A comparison using 'like' or 'as'", "An exaggeration", "A repeated sound"], correctAnswer: 0 },
                { text: "What is hyperbole?", options: ["An exaggeration", "A comparison using 'like' or 'as'", "A direct comparison without 'like' or 'as'", "A sound word"], correctAnswer: 0 },
                { text: "What is onomatopoeia?", options: ["A word that sounds like what it means", "A comparison using 'like' or 'as'", "A direct comparison without 'like' or 'as'", "An exaggeration"], correctAnswer: 0 }
            ],
            hard: [
                { text: "What is iambic pentameter?", options: ["A poetic meter with five iambs per line", "A type of rhyme scheme", "A poetic form with 14 lines", "A type of sonnet"], correctAnswer: 0 },
                { text: "Who wrote 'Hamlet'?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], correctAnswer: 1 },
                { text: "What is a soliloquy?", options: ["A speech by a character alone on stage", "A conversation between two characters", "A speech to the audience", "A type of poem"], correctAnswer: 0 },
                { text: "What is the difference between 'affect' and 'effect'?", options: ["Affect is a verb, effect is a noun", "Effect is a verb, affect is a noun", "They are interchangeable", "Affect is always negative, effect is always positive"], correctAnswer: 0 },
                { text: "What is dramatic irony?", options: ["When the audience knows something the characters don't", "When a character says the opposite of what they mean", "When the outcome is the opposite of what was expected", "When there's a contradiction between what is said and what is meant"], correctAnswer: 0 }
            ]
        }
    }
};