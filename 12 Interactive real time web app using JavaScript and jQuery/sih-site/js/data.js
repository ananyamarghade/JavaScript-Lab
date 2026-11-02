const u = (id, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`

const photos = {
  team: u('photo-1522071820081-009f0129c71c', 1400),
  meeting: u('photo-1531482615713-2afd69097998'),
  code: u('photo-1517694712202-14dd9538aa97'),
  group: u('photo-1552664730-d307ca884978'),
  laptops: u('photo-1519389950473-47ba0277781c'),
  hardware: u('photo-1581091226825-a6a2a5aee158'),
  desk: u('photo-1504384308090-c894fdcc538d'),
  screen: u('photo-1498050108023-c5249f4df085'),
  present: u('photo-1573164713714-d95e436ab8d6')
}

const nav = [
  ['Home', '#home'], ['About SIH', '#about'], ['Themes', '#themes'], ['Problem Statements', '#problems'],
  ['Timeline', '#timeline'], ['Winners', '#winners'], ['Gallery', '#gallery'], ['Contact', '#contact']
]

const announcements = [
  { date: '12 Nov 2026', tag: 'Registration', text: 'Institution nodal officer registration window opens for the internal hackathon round.' },
  { date: '08 Nov 2026', tag: 'Problem Statements', text: 'A new batch of software and hardware problem statements is added to the portal.' },
  { date: '02 Nov 2026', tag: 'Notice', text: 'Teams must have six members including at least one female participant and one mentor.' },
  { date: '28 Oct 2026', tag: 'Guidelines', text: 'Updated evaluation rubric and idea submission template are available for download.' },
  { date: '20 Oct 2026', tag: 'Update', text: 'Grand finale nodal centres and tentative schedule will be shared with shortlisted teams.' }
]

const themes = [
  { name: 'Smart Automation', icon: 'Cog', text: 'Intelligent use of resources and AI to gain valuable insights.' },
  { name: 'Fitness & Sports', icon: 'Dumbbell', text: 'Ideas that boost fitness activity and help people stay fit.' },
  { name: 'Heritage & Culture', icon: 'Landmark', text: 'Showcase India\u2019s rich cultural heritage and traditions.' },
  { name: 'MedTech / BioTech / HealthTech', icon: 'HeartPulse', text: 'Cutting-edge healthcare innovation for a growing population.' },
  { name: 'Agriculture, FoodTech & Rural Development', icon: 'Sprout', text: 'Strengthen the primary sector and process agricultural produce.' },
  { name: 'Smart Vehicles', icon: 'Car', text: 'Intelligent devices that improve the commute.' },
  { name: 'Transportation & Logistics', icon: 'Truck', text: 'Ease pressure on city resources, transport and logistics.' },
  { name: 'Robotics and Drones', icon: 'Bot', text: 'Robots and drones for emergencies, search and rescue.' },
  { name: 'Clean & Green Technology', icon: 'Leaf', text: 'Waste segregation, disposal and better sanitation.' },
  { name: 'Renewable / Sustainable Energy', icon: 'Zap', text: 'Generate and manage sustainable energy more efficiently.' },
  { name: 'Blockchain & Cybersecurity', icon: 'ShieldCheck', text: 'Distributed ledger and security ideas that can change sectors.' },
  { name: 'Miscellaneous', icon: 'Shapes', text: 'Ideas in hospitality, finance, entertainment, retail and education.' }
]

const problems = [
  { id: 'DEMO-101', title: 'Crop disease detection from smartphone photos', org: 'Department of Agriculture (sample)', theme: 'Agriculture, FoodTech & Rural Development', type: 'Software', text: 'Build an offline-capable app that identifies common crop diseases and suggests treatment.', detail: 'Expected output: a mobile prototype with a local model, a regional-language interface and a treatment advisory database.' },
  { id: 'DEMO-102', title: 'Low-cost pulse oximeter for remote clinics', org: 'Health Ministry Unit (sample)', theme: 'MedTech / BioTech / HealthTech', type: 'Hardware', text: 'Design an affordable, accurate oximeter suited for primary health centres.', detail: 'Expected output: a working device, calibration notes, a bill of materials under a defined cost ceiling and a data logging option.' },
  { id: 'DEMO-103', title: 'Adaptive learning companion for government schools', org: 'State Education Board (sample)', theme: 'Miscellaneous', type: 'Software', text: 'Create a tool that adjusts exercises to each learner using low-bandwidth delivery.', detail: 'Expected output: a web or mobile prototype, teacher dashboard and sample content for two subjects.' },
  { id: 'DEMO-104', title: 'Flood level early-warning sensor network', org: 'Disaster Authority (sample)', theme: 'Robotics and Drones', type: 'Hardware', text: 'Deploy solar-powered river sensors that send alerts to village committees.', detail: 'Expected output: sensor node prototype, communication scheme and an alert dashboard.' },
  { id: 'DEMO-105', title: 'Phishing detection for regional language messages', org: 'Cyber Cell (sample)', theme: 'Blockchain & Cybersecurity', type: 'Software', text: 'Detect fraudulent SMS and chat messages written in Indian languages.', detail: 'Expected output: a classifier, evaluation on a multilingual sample set and a browser or app integration.' },
  { id: 'DEMO-106', title: 'Last-mile freight route optimiser', org: 'Logistics Council (sample)', theme: 'Transportation & Logistics', type: 'Software', text: 'Plan delivery routes for small carriers using live traffic and load constraints.', detail: 'Expected output: a routing engine, map interface and cost saving report.' },
  { id: 'DEMO-107', title: 'Smart irrigation controller', org: 'Water Resources Dept (sample)', theme: 'Clean & Green Technology', type: 'Hardware', text: 'Reduce water use with a soil-moisture driven valve controller.', detail: 'Expected output: controller hardware, field test data and a simple farmer app.' },
  { id: 'DEMO-108', title: 'Predictive maintenance for small factories', org: 'MSME Ministry Unit (sample)', theme: 'Smart Automation', type: 'Hardware', text: 'Detect machine faults early using vibration and temperature sensing.', detail: 'Expected output: sensor kit, anomaly model and a maintenance alert interface.' },
  { id: 'DEMO-109', title: 'Waste segregation assistant for municipalities', org: 'Urban Development Dept (sample)', theme: 'Clean & Green Technology', type: 'Software', text: 'Guide households and collectors on correct waste sorting using image recognition.', detail: 'Expected output: an app, a ward-level reporting dashboard and a citizen awareness module.' }
]

const steps = [
  ['Problem Statement Launch', 'Ministries, departments and industry partners publish challenges that need technology solutions.'],
  ['Team Formation', 'Students form teams of six with a mentor and choose the problem they want to solve.'],
  ['Internal Hackathon', 'Each institution runs its own round to select the best teams for national submission.'],
  ['Idea Submission', 'Selected teams submit a structured proposal covering approach, feasibility and impact.'],
  ['Evaluation and Screening', 'Expert panels review submissions and shortlist teams for the finale.'],
  ['Grand Finale', 'Teams build and present working prototypes at nodal centres over a continuous hackathon.'],
  ['Solution Development', 'Promising solutions are supported for refinement and adoption by the sponsoring organisation.']
]

const stats = [
  ['Participating institutions', '2,500+', 'Illustrative'],
  ['Student innovators', '50,000+', 'Illustrative'],
  ['Problem statements', '600+', 'Illustrative'],
  ['Solutions developed', '1,200+', 'Illustrative']
]

const projects = [
  { name: 'KisanSense', img: 'desk', problem: 'Crop disease identification for small farmers', stack: 'React Native, TensorFlow Lite, Python', summary: 'An offline mobile app that diagnoses leaf diseases from photos and recommends local treatment.', impact: 'Cuts diagnosis time from days to seconds and reduces unnecessary pesticide use.' },
  { name: 'AarogyaBand', img: 'hardware', problem: 'Remote vital sign monitoring', stack: 'Arduino, BLE, Flutter, Firebase', summary: 'A low-cost wearable that tracks pulse and oxygen levels and alerts community health workers.', impact: 'Brings basic monitoring to clinics without specialist equipment.' },
  { name: 'JalRakshak', img: 'screen', problem: 'Flood early warning for riverside villages', stack: 'ESP32, LoRa, Node.js, Leaflet', summary: 'Solar sensor nodes relay water levels to a dashboard and send SMS alerts to residents.', impact: 'Gives communities extra hours to prepare and evacuate.' }
]

const skills = [
  ['Technical expertise', 'Work with real datasets, hardware and deployment constraints.'],
  ['Teamwork', 'Plan, divide and deliver as a six-member team under deadline.'],
  ['Industry exposure', 'Meet mentors and organisations that own the problems.'],
  ['Problem-solving', 'Break open-ended challenges into testable steps.'],
  ['Entrepreneurship', 'Turn a working prototype into a product or venture.'],
  ['Career opportunities', 'Build a portfolio recruiters and institutions notice.']
]

const gallery = [
  ['team', 'Hackathon teams', 'wide'], ['code', 'Coding sessions', 'tall'], ['hardware', 'Hardware development', ''],
  ['meeting', 'Mentoring sessions', ''], ['laptops', 'Project demonstrations', 'wide'], ['present', 'Award ceremonies', 'tall']
]
