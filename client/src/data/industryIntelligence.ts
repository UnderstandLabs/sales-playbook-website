export interface IndustryIntelligence {
  id: string;
  name: string;
  overview: string;
  painPoints: string[];
  trends: string[];
  decisionMakers: string[];
  techStack: string[];
  playAngles: {
    [key: string]: {
      angle: string;
      valueProps: string[];
      useCases: string[];
    };
  };
}

import { gtm2026Messaging } from './messagingFramework';

export const industryIntelligence: IndustryIntelligence[] = [
  {
    id: 'financial-services',
    name: 'Financial Services',
    overview: `${gtm2026Messaging.tagline}. Banks and financial institutions are discovering that ${gtm2026Messaging.marketProblems[0].description.toLowerCase()} For regulated industries, this creates a critical challenge: how to modernize for AI while maintaining compliance and trust.`,
    painPoints: [
      'Legacy BI systems can\'t support real-time decision-making',
      'Regulatory compliance requires governed, auditable analytics',
      'Data silos prevent unified customer views',
      'Manual reporting processes slow down strategic decisions',
      'Rising customer expectations for instant, personalized insights',
    ],
    trends: [
      'Open banking and API-first architectures',
      'Real-time fraud detection and risk management',
      'AI-powered personalization for customer experiences',
      'Embedded analytics in customer-facing applications',
      'Cloud migration of core banking systems',
    ],
    decisionMakers: ['CTO', 'Chief Data Officer', 'Head of Analytics', 'VP of Digital Transformation'],
    techStack: ['Snowflake', 'AWS', 'Azure', 'Tableau', 'Power BI', 'Oracle', 'SAP'],
    playAngles: {
      'decision-intelligence': {
        angle: 'Transform static dashboards into AI-powered intelligence that enables real-time risk assessment, fraud detection, and customer insights.',
        valueProps: [
          'Real-time risk scoring and fraud detection',
          'Automated regulatory reporting and compliance',
          'Predictive customer churn and lifetime value models',
          'Dynamic portfolio optimization',
        ],
        useCases: [
          'Real-time credit risk assessment',
          'Fraud detection with AI assistants',
          'Customer 360 with embedded intelligence',
          'Automated regulatory compliance reporting',
        ],
      },
      'embedded-intelligence': {
        angle: 'Deliver white-labeled analytics directly to customers and partners, enabling self-service insights while maintaining data governance.',
        valueProps: [
          'Customer-facing portfolio analytics',
          'Partner portals with real-time data',
          'White-labeled reporting for wealth management',
          'Embedded compliance dashboards',
        ],
        useCases: [
          'Customer investment portfolio dashboards',
          'Partner performance analytics',
          'Regulatory reporting portals',
          'Real-time transaction insights for cardholders',
        ],
      },
      'ai-modernization': {
        angle: 'Accelerate migration from legacy BI to AI-ready architecture without disrupting critical financial operations.',
        valueProps: [
          'Governed semantic layer for AI readiness',
          'Accelerated migration from legacy BI (Cognos, MicroStrategy)',
          'Maintain compliance during transformation',
          'Enable AI/ML on trusted, governed data',
        ],
        useCases: [
          'Cognos to GoodData migration',
          'AI-powered financial forecasting',
          'Semantic layer for LLM integration',
          'Legacy BI modernization with zero downtime',
        ],
      },
      'ai-architecture': {
        angle: 'Build a composable, AI-ready data architecture that supports both traditional analytics and emerging AI use cases.',
        valueProps: [
          'Headless BI for flexible deployment',
          'API-first architecture for AI integration',
          'Governed semantic layer for LLMs',
          'Multi-tenant analytics at scale',
        ],
        useCases: [
          'Headless analytics for mobile banking apps',
          'AI agent integration with governed data',
          'Multi-tenant SaaS analytics',
          'Composable data stack for fintech',
        ],
      },
    },
  },
  {
    id: 'retail',
    name: 'Retail & E-Commerce',
    overview: `${gtm2026Messaging.tagline}. Retailers are realizing that static dashboards can't keep pace with real-time consumer behavior. ${gtm2026Messaging.marketProblems[0].description.toLowerCase()} In retail, where margins are thin and competition is fierce, slow decisions cost millions.`,
    painPoints: [
      'Fragmented data across online, in-store, and mobile channels',
      'Inability to personalize at scale',
      'Supply chain visibility gaps',
      'Slow inventory optimization',
      'Lack of real-time pricing and promotion insights',
    ],
    trends: [
      'Omnichannel customer experiences',
      'AI-powered personalization and recommendations',
      'Real-time inventory and supply chain optimization',
      'Dynamic pricing and promotion strategies',
      'Embedded analytics in e-commerce platforms',
    ],
    decisionMakers: ['Chief Digital Officer', 'VP of E-Commerce', 'Head of Data & Analytics', 'CTO'],
    techStack: ['Shopify', 'Salesforce Commerce Cloud', 'Adobe Analytics', 'Google Analytics', 'Snowflake', 'BigQuery'],
    playAngles: {
      'decision-intelligence': {
        angle: 'Move beyond static sales reports to AI-driven insights that optimize pricing, inventory, and customer experiences in real-time.',
        valueProps: [
          'Real-time inventory optimization',
          'AI-powered demand forecasting',
          'Dynamic pricing recommendations',
          'Customer lifetime value prediction',
        ],
        useCases: [
          'Real-time inventory replenishment',
          'AI-driven markdown optimization',
          'Personalized product recommendations',
          'Churn prediction and retention campaigns',
        ],
      },
      'embedded-intelligence': {
        angle: 'Embed analytics directly into e-commerce platforms, supplier portals, and customer apps to enable data-driven decisions at every touchpoint.',
        valueProps: [
          'Supplier performance dashboards',
          'Customer-facing order and loyalty analytics',
          'Embedded analytics in POS systems',
          'White-labeled reporting for franchise partners',
        ],
        useCases: [
          'Supplier scorecards and collaboration portals',
          'Customer loyalty dashboards',
          'Franchise performance analytics',
          'In-app purchase analytics for mobile shoppers',
        ],
      },
      'ai-modernization': {
        angle: 'Modernize legacy retail analytics to support AI-powered personalization, forecasting, and supply chain optimization.',
        valueProps: [
          'Migrate from legacy BI to AI-ready platform',
          'Enable AI/ML on unified customer data',
          'Accelerate time-to-insight for merchandising teams',
          'Governed data for compliance (GDPR, CCPA)',
        ],
        useCases: [
          'Legacy BI migration for merchandising analytics',
          'AI-powered demand forecasting',
          'Customer 360 for personalization',
          'Supply chain analytics modernization',
        ],
      },
      'ai-architecture': {
        angle: 'Build a composable analytics architecture that supports omnichannel experiences and scales with business growth.',
        valueProps: [
          'Headless BI for mobile and web apps',
          'API-first architecture for third-party integrations',
          'Multi-tenant analytics for franchise models',
          'Governed semantic layer for AI agents',
        ],
        useCases: [
          'Headless analytics for mobile shopping apps',
          'API-driven analytics for marketplace platforms',
          'Multi-tenant analytics for franchise networks',
          'AI agent integration for customer service',
        ],
      },
    },
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    overview: `${gtm2026Messaging.tagline}. Healthcare providers face a critical challenge: ${gtm2026Messaging.marketProblems[1].description} In an industry where decisions impact lives, the intelligence era demands systems that can reason, explain, and act—not just visualize.`,
    painPoints: [
      'Fragmented patient data across EHR, billing, and operational systems',
      'Lack of real-time clinical decision support',
      'Regulatory compliance (HIPAA, GDPR) complexity',
      'Inefficient resource allocation and staffing',
      'Limited patient engagement and outcomes tracking',
    ],
    trends: [
      'Value-based care and outcomes measurement',
      'AI-powered clinical decision support',
      'Patient engagement and remote monitoring',
      'Interoperability and data exchange (FHIR)',
      'Embedded analytics in EHR systems',
    ],
    decisionMakers: ['Chief Medical Information Officer (CMIO)', 'CTO', 'VP of Analytics', 'Chief Data Officer'],
    techStack: ['Epic', 'Cerner', 'Snowflake', 'AWS HealthLake', 'Tableau', 'Power BI'],
    playAngles: {
      'decision-intelligence': {
        angle: 'Enable real-time clinical and operational intelligence to improve patient outcomes, reduce costs, and optimize resource allocation.',
        valueProps: [
          'Real-time patient risk stratification',
          'AI-powered clinical decision support',
          'Predictive staffing and resource optimization',
          'Automated quality and compliance reporting',
        ],
        useCases: [
          'Real-time sepsis prediction and alerts',
          'AI-driven readmission risk scoring',
          'Dynamic staffing optimization',
          'Automated HEDIS and quality measure reporting',
        ],
      },
      'embedded-intelligence': {
        angle: 'Embed analytics into EHR systems, patient portals, and provider dashboards to enable data-driven care at the point of decision.',
        valueProps: [
          'Embedded analytics in EHR workflows',
          'Patient-facing health dashboards',
          'Provider performance scorecards',
          'Payer collaboration portals',
        ],
        useCases: [
          'Clinical decision support in Epic/Cerner',
          'Patient engagement dashboards',
          'Provider quality scorecards',
          'Payer-provider collaboration analytics',
        ],
      },
      'ai-modernization': {
        angle: 'Modernize legacy healthcare analytics to support AI-powered clinical insights, population health, and value-based care.',
        valueProps: [
          'Migrate from legacy BI to AI-ready platform',
          'Enable AI/ML on unified patient data',
          'Maintain HIPAA compliance during transformation',
          'Accelerate time-to-insight for clinical teams',
        ],
        useCases: [
          'Legacy BI migration for clinical analytics',
          'AI-powered population health management',
          'Patient 360 for care coordination',
          'Value-based care analytics modernization',
        ],
      },
      'ai-architecture': {
        angle: 'Build a composable, HIPAA-compliant analytics architecture that supports clinical workflows and scales across health systems.',
        valueProps: [
          'Headless BI for mobile clinical apps',
          'API-first architecture for EHR integration',
          'Multi-tenant analytics for health networks',
          'Governed semantic layer for AI agents',
        ],
        useCases: [
          'Headless analytics for mobile clinician apps',
          'API-driven analytics for telehealth platforms',
          'Multi-tenant analytics for hospital networks',
          'AI agent integration for clinical decision support',
        ],
      },
    },
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Industrial',
    overview: `${gtm2026Messaging.tagline}. Manufacturers are discovering that ${gtm2026Messaging.marketProblems[2].description.toLowerCase()} Smart factories need intelligent systems that predict failures, optimize operations, and adapt in real-time—not static reports.`,
    painPoints: [
      'Limited visibility into production and supply chain',
      'Reactive maintenance causing costly downtime',
      'Fragmented data from IoT, ERP, and MES systems',
      'Slow decision-making due to manual reporting',
      'Inability to predict demand and optimize inventory',
    ],
    trends: [
      'Industry 4.0 and smart manufacturing',
      'Predictive maintenance and IoT analytics',
      'Supply chain resilience and visibility',
      'AI-powered quality control',
      'Digital twin and simulation',
    ],
    decisionMakers: ['Chief Operations Officer (COO)', 'VP of Manufacturing', 'Head of Supply Chain', 'CTO'],
    techStack: ['SAP', 'Oracle', 'Snowflake', 'AWS IoT', 'Azure IoT', 'Tableau', 'Power BI'],
    playAngles: {
      'decision-intelligence': {
        angle: 'Transform static production reports into AI-powered intelligence that predicts failures, optimizes operations, and improves quality.',
        valueProps: [
          'Predictive maintenance to reduce downtime',
          'Real-time production optimization',
          'AI-powered quality control',
          'Dynamic supply chain planning',
        ],
        useCases: [
          'Predictive maintenance for equipment',
          'Real-time production line optimization',
          'AI-driven quality defect detection',
          'Supply chain disruption prediction',
        ],
      },
      'embedded-intelligence': {
        angle: 'Embed analytics into MES systems, supplier portals, and operator dashboards to enable data-driven decisions on the factory floor.',
        valueProps: [
          'Embedded analytics in MES workflows',
          'Supplier performance dashboards',
          'Operator productivity scorecards',
          'Customer delivery tracking portals',
        ],
        useCases: [
          'Real-time OEE dashboards for operators',
          'Supplier quality and delivery scorecards',
          'Production scheduling optimization',
          'Customer order tracking portals',
        ],
      },
      'ai-modernization': {
        angle: 'Modernize legacy manufacturing analytics to support AI-powered predictive maintenance, quality control, and supply chain optimization.',
        valueProps: [
          'Migrate from legacy BI to AI-ready platform',
          'Enable AI/ML on IoT and production data',
          'Accelerate time-to-insight for operations teams',
          'Unified view across plants and regions',
        ],
        useCases: [
          'Legacy BI migration for operations analytics',
          'AI-powered predictive maintenance',
          'IoT data analytics for smart manufacturing',
          'Global supply chain visibility',
        ],
      },
      'ai-architecture': {
        angle: 'Build a composable analytics architecture that supports IoT integration, real-time monitoring, and scales across global operations.',
        valueProps: [
          'Headless BI for mobile operator apps',
          'API-first architecture for IoT integration',
          'Multi-tenant analytics for global plants',
          'Governed semantic layer for AI agents',
        ],
        useCases: [
          'Headless analytics for mobile plant monitoring',
          'API-driven analytics for IoT platforms',
          'Multi-tenant analytics for global operations',
          'AI agent integration for production optimization',
        ],
      },
    },
  },
  {
    id: 'technology',
    name: 'Technology & SaaS',
    overview: `${gtm2026Messaging.tagline}. SaaS companies are realizing their customers don't want dashboards—they want intelligence built into workflows. ${gtm2026Messaging.marketProblems[3].description} Product differentiation now depends on AI-powered features, not static visualizations.`,
    painPoints: [
      'Customers demand embedded analytics in SaaS products',
      'Limited visibility into product usage and engagement',
      'Difficulty scaling analytics for multi-tenant environments',
      'Slow time-to-market for new analytics features',
      'Lack of AI-powered insights for customer success',
    ],
    trends: [
      'Embedded analytics as a product differentiator',
      'Product-led growth and usage analytics',
      'AI-powered customer success and retention',
      'Multi-tenant SaaS analytics at scale',
      'Composable data architectures',
    ],
    decisionMakers: ['CTO', 'VP of Product', 'Head of Customer Success', 'Chief Data Officer'],
    techStack: ['AWS', 'Azure', 'GCP', 'Snowflake', 'BigQuery', 'Redshift', 'Looker', 'Tableau'],
    playAngles: {
      'decision-intelligence': {
        angle: 'Enable AI-powered product intelligence that predicts churn, optimizes features, and drives customer success.',
        valueProps: [
          'Predictive churn and expansion models',
          'AI-powered product usage insights',
          'Automated customer health scoring',
          'Dynamic feature adoption recommendations',
        ],
        useCases: [
          'Churn prediction and retention campaigns',
          'Feature adoption and usage optimization',
          'Customer health scoring for CSMs',
          'AI-driven upsell and cross-sell recommendations',
        ],
      },
      'embedded-intelligence': {
        angle: 'Embed white-labeled analytics directly into your SaaS product to differentiate, increase stickiness, and drive customer value.',
        valueProps: [
          'White-labeled customer-facing analytics',
          'Multi-tenant analytics at scale',
          'Customizable dashboards per customer',
          'API-first for seamless integration',
        ],
        useCases: [
          'Customer-facing usage dashboards',
          'White-labeled reporting for enterprise customers',
          'Multi-tenant analytics for SaaS platforms',
          'Embedded analytics in mobile apps',
        ],
      },
      'ai-modernization': {
        angle: 'Modernize analytics infrastructure to support AI-powered features, scale multi-tenant deployments, and accelerate product innovation.',
        valueProps: [
          'Migrate from legacy BI to AI-ready platform',
          'Enable AI/ML on product and usage data',
          'Accelerate time-to-market for analytics features',
          'Governed data for AI agents and LLMs',
        ],
        useCases: [
          'Legacy BI migration for product analytics',
          'AI-powered customer insights',
          'Semantic layer for LLM integration',
          'Product analytics modernization',
        ],
      },
      'ai-architecture': {
        angle: 'Build a composable, API-first analytics architecture that scales with your SaaS business and supports emerging AI use cases.',
        valueProps: [
          'Headless BI for flexible deployment',
          'API-first architecture for product integration',
          'Multi-tenant analytics at scale',
          'Governed semantic layer for AI agents',
        ],
        useCases: [
          'Headless analytics for SaaS products',
          'API-driven analytics for platform ecosystems',
          'Multi-tenant analytics for enterprise SaaS',
          'AI agent integration for customer support',
        ],
      },
    },
  },
];
