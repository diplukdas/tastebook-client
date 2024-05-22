import React from "react";

const Disclaimer = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Disclaimer Demo</h1>
        <p className="mb-4">Last updated: April 24, 2024</p>

        <h2 className="text-2xl font-bold mt-6 mb-3">Interpretation and Definitions</h2>
        <h4 className="text-xl font-bold mb-2">Interpretation</h4>
        <p className="mb-4">The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

        <h4 className="text-xl font-bold mb-2">Definitions</h4>
        <p className="mb-4">For the purposes of this Disclaimer:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>
            <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Disclaimer) refers to TasteBook.
          </li>
          <li>
            <strong>Service</strong> refers to the Website.
          </li>
          <li>
            <strong>You</strong> means the individual accessing the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
          </li>
          <li>
            <strong>Website</strong> refers to TasteBook, accessible from <a href="Tastebook.com" rel="external nofollow noopener" target="_blank">Tastebook.com</a>
          </li>
        </ul>

        {<div class="container mx-auto px-4">
  <p class="mb-4">The information contained on the Service is for general information purposes only.</p>
  <p class="mb-4">The Company assumes no responsibility for errors or omissions in the contents of the Service.</p>
  <p class="mb-4">In no event shall the Company be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice. This Disclaimer has been created with the help of the <a href="https://www.freeprivacypolicy.com/free-disclaimer-generator/" class="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Free Disclaimer Generator</a>.</p>
  <p class="mb-4">The Company does not warrant that the Service is free of viruses or other harmful components.</p>

  <h2 class="text-3xl font-bold text-black-700 mb-2">External Links Disclaimer</h2>
  <p class="mb-4">The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Company.</p>
  <p class="mb-4">Please note that the Company does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>

  <h2 class="text-3xl font-bold text-black-700 mb-2">Errors and Omissions Disclaimer</h2>
  <p class="mb-4">The information given by the Service is for general guidance on matters of interest only. Even if the Company takes every precaution to ensure that the content of the Service is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules and regulations, there may be delays, omissions or inaccuracies in the information contained on the Service.</p>
  <p class="mb-4">The Company is not responsible for any errors or omissions, or for the results obtained from the use of this information.</p>

</div>
}

        <h2 className="text-2xl font-bold mt-8 mb-3">Contact Us</h2>
        <p>If you have any questions about this Disclaimer, You can contact Us:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>By email: contact@tastebook.com</li>
        </ul>
      </div>

    </div>
  );
};

export default Disclaimer;
