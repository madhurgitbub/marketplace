import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Send, AlertTriangle } from 'lucide-react';
import { faqs } from '../data/services';

export default function HelpPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [reportForm, setReportForm] = useState({
    subject: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReportForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your report has been submitted. Our team will review it shortly.');
    setReportForm({ subject: '', description: '' });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <HelpCircle className="w-8 h-8 text-gray-600" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Help Center</h1>
        <p className="text-gray-600 mt-2">Find answers to your questions or report an issue</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* FAQ Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                  {openFaq === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openFaq === faq.id && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Report Issue Form */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Report an Issue</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg mb-6">
              <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-yellow-800">Before submitting</p>
                <p className="text-sm text-yellow-700 mt-1">
                  Please check the FAQ section first. If your issue is not addressed, submit a report below.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                  Subject
                </label>
                <select
                  name="subject"
                  value={reportForm.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                >
                  <option value="">Select a topic</option>
                  <option value="account">Account Issues</option>
                  <option value="listing">Listing Problems</option>
                  <option value="payment">Payment Concerns</option>
                  <option value="fraud">Report Fraud/Scam</option>
                  <option value="bug">Technical Bug</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                  Describe your issue
                </label>
                <textarea
                  name="description"
                  value={reportForm.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Please provide as much detail as possible..."
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-black text-white font-medium rounded-lg hover:bg-gray-800 active:scale-[0.98] transition-all"
              >
                <Send className="w-4 h-4" />
                Submit Report
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-6 bg-gray-50 rounded-xl border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Need more help?</h3>
            <p className="text-sm text-gray-600 mb-4">
              Our support team is available Monday to Friday, 9 AM to 6 PM IST.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-gray-600">
                Email: <a href="mailto:support@marketplace.com" className="text-black font-medium hover:underline">support@marketplace.com</a>
              </p>
              <p className="text-gray-600">
                Phone: <a href="tel:+911800123456" className="text-black font-medium hover:underline">+91 1800-123-4567</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
