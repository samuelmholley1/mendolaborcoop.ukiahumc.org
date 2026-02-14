import React from 'react';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-cream rounded-lg shadow-2xl max-w-md w-full border-4 border-gold overflow-hidden animate-fadeIn">
        {/* Header */}
        <div className="bg-moss text-cream p-6 text-center">
          <div className="bg-gold text-cream rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
            <span className="text-5xl">✓</span>
          </div>
          <h2 className="text-3xl font-headline font-bold">
            Thank You!
          </h2>
        </div>

        {/* Body */}
        <div className="p-8 text-center">
          <p className="text-xl font-body text-moss mb-4 leading-relaxed">
            Your inquiry has been submitted successfully.
          </p>
          <div className="bg-gold/10 border-l-4 border-l-gold p-6 rounded-r-lg mb-6">
            <p className="text-lg font-headline font-semibold text-gold mb-2">
              📞 We'll be in touch within 72 hours
            </p>
            <p className="text-sm font-body text-moss">
              One of our coordinators, Cheryl, Braven, or Tony, will contact you to discuss your project.
            </p>
          </div>
          <p className="text-sm font-body text-moss mb-6 opacity-75">
            Need immediate assistance? Call us at{' '}
            <a href="tel:+13692161512" className="text-gold font-semibold hover:underline">
              (369) 216-1512
            </a>
          </p>
          <button
            onClick={onClose}
            className="bg-moss text-cream px-8 py-3 rounded-lg text-lg font-headline font-semibold hover:bg-opacity-90 transition-colors w-full"
          >
            Close
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ConfirmationModal;
