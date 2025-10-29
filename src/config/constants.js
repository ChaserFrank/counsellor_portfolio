// API endpoints
export const API_URL = import.meta.env.VITE_API_URL

// Counselor info
export const COUNSELOR_NAME = "Joan Wambui Muturi";
export const COUNSELOR_TITLE = "Professional Counselor";
export const COUNSELOR_EMAIL = "mail@psychologistjoan";
export const COUNSELOR_PHONE = "+254 704 376 452";

// Working hours
export const WORKING_HOURS = {
  monday: "9:00 AM - 5:00 PM",
  tuesday: "9:00 AM - 5:00 PM",
  wednesday: "9:00 AM - 5:00 PM",
  thursday: "9:00 AM - 5:00 PM",
  friday: "9:00 AM - 5:00 PM",
  saturday: "10:00 AM - 2:00 PM",
  sunday: "Closed"
};

// Time slots for booking
export const TIME_SLOTS = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM"
];

// Available services
export const SERVICES = [
  {
    id: 1,
    title: "Depression Therapy",
    description: "Specialized therapy sessions focused on helping you overcome depression through evidence-based approaches.",
    longDescription: `Depression therapy at our center combines proven therapeutic approaches to help you regain joy and purpose in life. Our sessions focus on:

    • Understanding the root causes of your depression
    • Developing effective coping strategies
    • Rebuilding self-worth and confidence
    • Creating healthy lifestyle habits
    • Managing negative thought patterns
    • Building a support network

    Using Cognitive Behavioral Therapy (CBT), mindfulness techniques, and other evidence-based approaches, we'll work together to help you overcome depression and develop lasting resilience.`,
    price: 20,
    image: "/depression.jpeg"
  },
  {
    id: 2,
    title: "Anxiety Management",
    description: "Learn effective techniques to manage anxiety and reduce stress in your daily life.",
    longDescription: `Our comprehensive anxiety management program helps you understand and control anxiety through:

    • Identifying anxiety triggers and patterns
    • Learning breathing and relaxation techniques
    • Developing practical coping strategies
    • Understanding thought-behavior connections
    • Building stress management skills
    • Creating an anxiety management toolkit

    We use a combination of Cognitive Behavioral Therapy, exposure therapy, and mindfulness practices to help you regain control and live with greater peace of mind.`,
    price: 20,
    image: "https://images.pexels.com/photos/3807738/pexels-photo-3807738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    title: "Addiction Recovery",
    description: "Supportive therapy to help you overcome addiction and build a path to lasting recovery.",
    longDescription: `Our addiction recovery program provides comprehensive support through every stage of recovery:

    • Assessment and personalized treatment planning
    • Understanding addiction patterns and triggers
    • Developing healthy coping mechanisms
    • Building relapse prevention strategies
    • Addressing co-occurring mental health issues
    • Family support and education
    • Aftercare planning and support

    We combine evidence-based approaches including CBT, Motivational Interviewing, and 12-step facilitation to support your journey to lasting recovery.`,
    price: 20,
    image: "/Addiction.jpeg"
  },
  {
    id: 4,
    title: "Relationship & Marriage Counselling",
    description: "Improve communication and rebuild connection in your relationship with professional guidance.",
    longDescription: `Our relationship counseling helps couples strengthen their bond through:

    • Improving communication patterns
    • Resolving conflicts effectively
    • Rebuilding trust and intimacy
    • Understanding attachment styles
    • Setting healthy boundaries
    • Planning for the future together

    Using the Gottman Method and Emotionally Focused Therapy techniques, we help couples create stronger, more fulfilling relationships.`,
    price: 27,
    //duration: "90 minutes",
    image: "/Relationship.jpeg"
  },
  {
    id: 5,
    title: "Trauma Recovery",
    description: "Gentle, effective therapy to help you process traumatic experiences and reclaim your life.",
    longDescription: `Our trauma recovery program provides a safe space for healing through:

    • Understanding trauma responses
    • Processing traumatic memories safely
    • Building emotional regulation skills
    • Developing healthy coping mechanisms
    • Restoring sense of safety and control
    • Integration and post-traumatic growth

    We use evidence-based approaches including EMDR, Somatic Experiencing, and trauma-focused CBT to support your healing journey.`,
    price: 20,
    //duration: "75 minutes",
    image: "/Trauma.jpeg"
  },
  {
    id: 6,
    title: "Stress Management",
    description: "Develop practical strategies to reduce stress and improve your overall wellbeing.",
    longDescription: `Our stress management program helps you develop effective tools for managing life's pressures:

    • Identifying stress triggers and patterns
    • Learning relaxation techniques
    • Developing time management skills
    • Building resilience
    • Creating work-life balance
    • Implementing healthy lifestyle changes

    We combine practical strategies with mindfulness-based stress reduction techniques to help you achieve lasting calm and balance.`,
    price: 20,
    //duration: "60 minutes",
    image: "https://images.pexels.com/photos/897817/pexels-photo-897817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 7,
    title: "Family Therapy",
    description: "Resolve conflicts and strengthen family bonds through guided family counseling sessions.",
    longDescription: `Our family therapy sessions help improve family dynamics through:

    • Enhancing family communication
    • Resolving conflicts constructively
    • Setting healthy boundaries
    • Understanding family patterns
    • Building stronger relationships
    • Supporting life transitions

    Using systemic family therapy approaches, we help families create more harmonious and supportive relationships.`,
    price: 27,
    //duration: "90 minutes",
    image: "/Family.jpeg"
  },
  {
    id: 8,
    title: "Child/Adolescent Therapy",
    description: "Specialized counseling to support children and teenagers through their unique challenges.",
    longDescription: `Our child and adolescent therapy program provides age-appropriate support through:

    • Play therapy for younger children
    • Art and expressive therapies
    • Building emotional intelligence
    • Developing social skills
    • Managing academic stress
    • Supporting family relationships
    • Addressing behavioral concerns

    We use developmentally appropriate techniques to help young people navigate challenges and build resilience.`,
    price: 15,
    //duration: "60 minutes",
    image: "https://images.pexels.com/photos/3755511/pexels-photo-3755511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

// Sample blog posts
export const BLOG_POSTS = [
  {
    id: 1,
    title: "Understanding and Managing Depression: A Comprehensive Guide",
    excerpt: "Learn about the different types of depression, their symptoms, and effective strategies for managing and overcoming depression.",
    content: `Depression is more than just feeling sad – it's a complex mental health condition that affects millions of people worldwide. This comprehensive guide explores the nature of depression, its various manifestations, and evidence-based approaches to treatment and management.

    Understanding Depression:
    • Different types of depression (Major Depressive Disorder, Persistent Depressive Disorder, etc.)
    • Common symptoms and warning signs
    • The role of brain chemistry and life events
    • Impact on daily life and relationships

    Treatment Approaches:
    • Cognitive Behavioral Therapy (CBT)
    • Medication options and considerations
    • Lifestyle changes and self-care strategies
    • Building a support network

    Recovery and Management:
    • Developing healthy coping mechanisms
    • Creating a wellness plan
    • Preventing relapse
    • Supporting loved ones with depression`,
    author: "Psychologist Joan Muturi",
    date: "2025-04-15",
    category: "Depression",
    image: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    title: "Breaking Free from Anxiety: Tools and Techniques",
    excerpt: "Discover practical strategies and evidence-based techniques for managing anxiety and building emotional resilience.",
    content: `Anxiety is a natural response to stress, but when it becomes overwhelming, it can significantly impact our quality of life. This article explores effective strategies for managing anxiety and building lasting resilience.

    Understanding Anxiety:
    • Types of anxiety disorders
    • Physical and emotional symptoms
    • Common triggers and patterns
    • The anxiety cycle

    Management Strategies:
    • Breathing techniques and mindfulness
    • Cognitive restructuring
    • Exposure therapy principles
    • Lifestyle modifications

    Long-term Solutions:
    • Building a anxiety management toolkit
    • Creating healthy boundaries
    • Developing support systems
    • Professional treatment options`,
    author: "Psychologist Joan Muturi",
    date: "2025-03-20",
    category: "Anxiety",
    image: "https://images.pexels.com/photos/3807738/pexels-photo-3807738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    title: "The Journey to Recovery: Understanding Addiction and Healing",
    excerpt: "An in-depth look at addiction, recovery processes, and building a sustainable path to long-term sobriety.",
    content: `Addiction is a complex disease that affects both the brain and behavior. Understanding its nature and the recovery process is crucial for successful long-term recovery.

    Understanding Addiction:
    • The science of addiction
    • Common misconceptions
    • Risk factors and triggers
    • Impact on physical and mental health

    Recovery Process:
    • Stages of change
    • Treatment options
    • Building support systems
    • Dealing with triggers and cravings

    Maintaining Recovery:
    • Relapse prevention strategies
    • Lifestyle changes
    • Building healthy relationships
    • Finding purpose in recovery`,
    author: "Psychologist Joan Muturi",
    date: "2025-03-25",
    category: "Addiction",
    image: "https://images.pexels.com/photos/6963870/pexels-photo-6963870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    title: "Building Stronger Relationships: Communication and Connection",
    excerpt: "Essential strategies for improving communication, building trust, and strengthening relationships.",
    content: `Healthy relationships require ongoing effort, understanding, and effective communication. This guide explores key elements of building and maintaining strong relationships.

    Foundation of Healthy Relationships:
    • Effective communication techniques
    • Building and maintaining trust
    • Setting healthy boundaries
    • Understanding attachment styles

    Common Challenges:
    • Conflict resolution
    • Managing expectations
    • Dealing with past hurts
    • Growing together

    Strengthening Bonds:
    • Quality time and connection
    • Emotional intimacy
    • Supporting individual growth
    • Creating shared goals`,
    author: "Psychologist Joan Muturi",
    date: "2025-04-28",
    category: "Relationships",
    image: "StrongBuild.jpeg"
  },
  {
    id: 5,
    title: "Healing from Trauma: A Path to Recovery and Growth",
    excerpt: "Understanding trauma, its effects, and pathways to healing and post-traumatic growth.",
    content: `Trauma can have lasting impacts on our mental, emotional, and physical well-being. This comprehensive guide explores trauma recovery and the journey to healing.

    Understanding Trauma:
    • Types of trauma
    • Impact on brain and body
    • Common responses and coping mechanisms
    • The role of the nervous system

    Healing Process:
    • Creating safety and stability
    • Processing traumatic experiences
    • Rebuilding trust and connections
    • Somatic approaches to healing

    Post-traumatic Growth:
    • Finding meaning and purpose
    • Building resilience
    • Integrating experiences
    • Supporting others`,
    author: "Psychologist Joan Muturi",
    date: "2025-05-20",
    category: "Trauma",
    image: "/Trauma.jpeg"
  }
];