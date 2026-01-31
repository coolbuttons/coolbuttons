import React from 'react';
import { ButtonDesign, ButtonCategory } from '../../../../types';

const DisabledButton: React.FC = () => {
  return (
    <button 
      disabled 
      className="px-8 py-3 bg-gray-400 text-gray-600 font-semibold rounded-lg cursor-not-allowed opacity-60"
    >
      Disabled
    </button>
  );
};

export const design: ButtonDesign = {
  id: 'disabled-button',
  name: 'Disabled Button',
  category: ButtonCategory.ESSENTIAL,
  component: DisabledButton,
  description: 'A standard button in a disabled state to indicate unavailable actions.',

  // Tailwind CSS version
  tailwind: `<button disabled className="px-8 py-3 bg-gray-400 text-gray-600 font-semibold rounded-lg cursor-not-allowed opacity-60">
  Disabled
</button>`,

  // React TypeScript version
  react: `import React from 'react';

const DisabledButton: React.FC = () => {
  return (
    <button 
      disabled 
      className="px-8 py-3 bg-gray-400 text-gray-600 font-semibold rounded-lg cursor-not-allowed opacity-60"
    >
      Disabled
    </button>
  );
};

export default DisabledButton;`,

  // HTML/CSS version
  html: `<button class="disabled-button" disabled>Disabled</button>`,

  css: `.disabled-button {
  padding: 12px 32px;
  background-color: #9ca3af; /* gray-400 */
  color: #4b5563; /* gray-600 */
  font-weight: 600;
  border-radius: 8px;
  border: none;
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none; /* Often added to ensure no interaction in CSS */
}`,

  // Vanilla JavaScript version
  javascript: `const disabledBtn = document.querySelector('.disabled-button');

// Native HTML 'disabled' attribute prevents click events.
// However, if managing state manually in JS:
disabledBtn.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  return false;
});`,

  // Default code export (Tailwind)
  code: `<button disabled className="px-8 py-3 bg-gray-400 text-gray-600 font-semibold rounded-lg cursor-not-allowed opacity-60">
  Disabled
</button>`,
};

export default DisabledButton;