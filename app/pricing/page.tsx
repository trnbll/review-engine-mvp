import Link from 'next/link'
import { Star, Check, ArrowRight } from 'lucide-react'

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: 79,
      description: 'Perfect for small home service businesses',
      features: [
        '40 review requests per month',
        'Email campaigns',
        'Basic AI responses',
        'Google Business Profile integration',
        'Mobile app access',
        'Email support',
        'Basic analytics'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Growth',
      price: 129,
      description: 'Most popular for growing businesses',
      features: [
        '100 review requests per month',
        'SMS + Email campaigns',
        'Advanced AI responses',
        'Reactivation campaigns',
        'Priority support',
        'Advanced analytics',
        'Review widgets',
        'Competitor monitoring'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Pro',
      price: 199,
      description: 'For established businesses and franchises',
      features: [
        'Unlimited review requests',
        'Full AI response suite',
        'Multi-location support (up to 5)',
        'Advanced analytics & reporting',
        'API access',
        'Phone support',
        'White-label options',
        'Custom integrations'
      ],
      popular: false,
      cta: 'Start Free Trial'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Star className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">ReviewEngine</span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/pricing" className="text-blue-600 font-semibold">
                Pricing
              </Link>
              <Link href="/features" className="text-gray-600 hover:text-blue-600 transition-colors">
                Features
              </Link>
              <Link href="/login" className="text-gray-600 hover:text-blue-600 transition-colors">
                Sign In
              </Link>
              <Link href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Choose the plan that fits your business size. All plans include a 14-day free trial.
            </p>
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
              <Check className="h-4 w-4 mr-2" />
              14-Day Free Trial • No Credit Card Required
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div key={plan.name} className={`relative bg-white rounded-2xl shadow-lg border ${
                plan.popular ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {plan.description}
                    </p>
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-5xl font-bold text-gray-900">
                        ${plan.price}
                      </span>
                      <span className="text-gray-600 ml-2">
                        /month
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">
                      Billed monthly • Cancel anytime
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href="/signup" 
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors flex items-center justify-center ${
                      plan.popular 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Enterprise Section */}
          <div className="mt-16 text-center">
            <div className="bg-gray-900 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Enterprise
              </h3>
              <p className="text-gray-300 mb-6">
                Need custom features, white-label options, or managing 5+ locations? Let's talk about a custom solution.
              </p>
              <Link 
                href="/contact" 
                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Contact Sales
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What's included in the free trial?
                </h3>
                <p className="text-gray-600">
                  Full access to all features in your chosen plan for 14 days. No credit card required to start.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Can I cancel anytime?
                </h3>
                <p className="text-gray-600">
                  Yes, you can cancel your subscription anytime. No long-term contracts or cancellation fees.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do you offer setup assistance?
                </h3>
                <p className="text-gray-600">
                  Yes! All plans include onboarding support to get you set up and collecting reviews quickly.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-600">
                  We accept all major credit cards (Visa, MasterCard, American Express) and PayPal.
                </p>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <div className="flex justify-center items-center space-x-8 text-gray-400">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>30-Day Money Back Guarantee</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>24/7 Customer Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}