# ReviewEngine MVP - Home Service Review Automation Platform

## 🎯 Product Overview

ReviewEngine is a comprehensive review automation platform specifically designed for home service businesses (plumbing, HVAC, cleaning, landscaping, etc.). Our goal is to build a superior alternative to Review Harvest with better technology, economics, and customer acquisition.

**Revenue Opportunity:** $430K ARR potential  
**Target Market:** 100+ customers by Month 6  
**Competitive Advantage:** Native platform (no GoHighLevel dependency) + integrated outbound acquisition

## 📋 Development Status

**Current Phase:** MVP Development (Month 1)  
**Started:** March 8th, 2026  
**Target Completion:** May 2026  

### Month 1 Goals ✅ IN PROGRESS
- [x] Project foundation and planning
- [ ] Core dashboard and user management
- [ ] Google Business Profile integration  
- [ ] Basic review request campaigns (email)
- [ ] Database schema and API foundations

### Month 2 Goals (Planned)
- [ ] SMS integration (Twilio)
- [ ] AI review responses (GPT-4)
- [ ] Mobile app (basic version)
- [ ] Payment processing (Stripe)

## 🛠 Technical Architecture

**Frontend:** Next.js 15 (App Router)  
**Backend:** Next.js API routes + tRPC  
**Database:** Neon (PostgreSQL)  
**Hosting:** Railway (auto-deploy from GitHub)  
**SMS/Voice:** Twilio  
**Email:** Resend/SendGrid  
**Auth:** NextAuth.js  
**Payments:** Stripe  

### Key Integrations
- Google My Business API (review management)
- Google Places API (business data)
- Twilio SMS API
- Email service provider APIs
- Stripe payment processing

## 💰 Business Model

### Pricing Strategy
**Starter:** $79/month (40 review requests)  
**Growth:** $129/month (100 review requests)  
**Pro:** $199/month (unlimited requests)  
**Enterprise:** Custom pricing  

### Revenue Projections
- **Month 6:** 100 customers, $12K MRR
- **Month 12:** 300 customers, $40K MRR  
- **Month 18:** 1,000+ customers, $120K+ MRR

## 🎯 Competitive Positioning

### vs Review Harvest (Primary Competitor)
- ✅ **Superior Technology:** Native platform vs GHL white-label
- ✅ **Better Economics:** No GHL licensing costs
- ✅ **Systematic Acquisition:** Outbound via Bison vs manual sales
- ✅ **AI-Powered:** GPT-4 responses vs basic templates

### Key Features (MVP)
1. **Review Collection Engine** - Personalized SMS/email campaigns
2. **Google Business Profile Integration** - Auto-sync reviews and ratings  
3. **AI Review Management** - GPT-4 powered response generation
4. **Dashboard & Analytics** - Performance tracking and insights
5. **Mobile App** - Technician-friendly review requests

## 📊 Success Metrics

### Product KPIs
- Monthly Active Users (MAU)
- Review collection rate (% requests → reviews)
- AI response usage rate
- Customer satisfaction (NPS)

### Business KPIs
- Monthly Recurring Revenue (MRR)
- Customer Acquisition Cost (CAC): Target $150-250
- Customer Lifetime Value (LTV): Target $2,400
- Monthly Churn: Target <5%

## 🚀 Next Steps

1. **Build MVP Foundation** (Current Sprint)
   - Set up Next.js application structure
   - Implement user authentication
   - Design database schema
   - Create basic dashboard

2. **Google Integration** (Week 2)
   - Google My Business API setup
   - OAuth authentication flow
   - Basic review sync functionality

3. **Campaign Engine** (Week 3)
   - Email campaign builder
   - Contact management
   - Basic automation sequences

4. **Testing & Validation** (Week 4)
   - Beta testing with select customers
   - Performance optimization
   - User feedback integration

## 📁 Project Structure

```
/products/review-engine/
├── README.md                  # This file
├── app/                       # Next.js application
├── src/                       # Source code
│   ├── components/            # React components
│   ├── pages/                 # Page components
│   ├── lib/                   # Utility functions
│   └── api/                   # API routes
├── database/                  # Database schemas and migrations
├── docs/                      # Documentation
└── scripts/                   # Build and deployment scripts
```

---

**Building the future of review automation for home service businesses.**  
**Expected Launch:** May 2026  
**Revenue Target:** $430K ARR by Month 18