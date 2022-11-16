import React from 'react';
import Link from 'next/link';
// import { Disclosure } from '@headlessui/react';
// import { ChevronDownIcon } from '@heroicons/react/outline';

function FAQ() {
	function classNames(...classes) {
		return classes.filter(Boolean).join(' ');
	}
	const questions = [
		{
			question: 'How long will my cleaning take?',
			answer: 'Our cleaners time their work based on the size of your property and which areas you selected for cleaning. If you ordered the basic package for example, then the cleaning should not take too long. ',
		},
		{
			question: 'How much will it cost me?',
			answer: 'Pricing varies based on location, size of home, and which areas you wanted cleaned. As per usual, we charge hourly fees for our cleaners which includes our agency rate. ',
		},
		{
			question: 'Do you wash the dishes and do laundry?',
			answer: 'Unfortunately, we do not want our cleaners to break a precious plate or destroy a favourite piece of clothing. It is because of this we do not offer dishwashing or laundry services with our cleaning. ',
		},

		{
			question: 'Are your cleaners checked?',
			answer: 'All cleaners are fully vetted and interviewed beforehand to ensure our clients safety. This includes full DBS check, UK Right to work, Uk Residency & Naitional Insurance ID',
		},
		{
			question: 'Can you provide equipment?',
			answer: 'Our cleaners will always bring the essential cloths and basic equipment. However, there is an option at an additional cost for cleaners to bring our own vacuums and floor steamers. ',
		},
		{
			question: 'Are there contracts available for regular cleaners?',
			answer: 'Yes, there are both domestic and commercial cleaning contracts available with us. Contracts also allow us to lower prices for our clients due to the continuous nature of the cleaning. Contracts come in 1 month, 3 month, 6 month, 9 month & 12 month contracts ',
		},

		{
			question: 'What if I want to cancel my contract?',
			answer: 'No problem, we require a 14 day notice in order to process a cancellation of your contract.',
		},
		{
			question: 'What if my cleaner does not arrive?',
			answer: 'Please contact us so we can gather information at contact@mastersupremecleaning.com.  ',
		},
		{
			question: 'When should I contact you if I want to cancel my clean?',
			answer: 'If there are any issues with your cleaning and you have a complaint, please contact us at contact@mastersupremecleaning.com. ',
		},
	];

	return (
		<div style={{ padding: '15px' }} className="container">
			<div className="text-center">
				<h3 className="text-center"> FAQs 🧐</h3>
				<div className="content">
					<div style={{ padding: '15px' }}>
						<h4>Do I need a tech background/experience ??</h4>
						<p>
							No, the Bootcamp is for{' '}
							<span style={{ color: 'blue', fontWeight: 'bold' }}>complete beginners</span> looking to
							change their career. All of our students have have a non-technical background, including our
							co-founder, Shuayb!
						</p>
					</div>
				</div>
				<div className="content">
					<div style={{ padding: '0 15px' }}>
						<h4>What are the time requirements? can I do this part-time?</h4>
						<p>
							<br />
							We highly recommend attending the{' '}
							<span style={{ color: 'blue', fontWeight: 'bold' }}>YOUR </span> per week to stay motivated
							and listen
						</p>
					</div>
				</div>
				<div className="content">
					<div style={{ padding: '0 15px' }}>
						<h4>How much support do I get?</h4>
						<p>
							We provide unlimited help-desk support, 1-1 calls, code reviews, and answer any question,
							ensuring you will never get stuck
						</p>
					</div>
				</div>
				<div className="content">
					<div style={{ padding: '0 15px' }}>
						<h4>I don't have a degree, is this still for me?</h4>
						<p>
							Why would you let that stop you? coding bootcamps gives you the skills which are highly in
							demand. <span style={{ color: 'blue', fontWeight: 'bold' }}>90% of graduates</span> from
							popular bootcamps are hired!
						</p>
					</div>
				</div>
				<div className="content">
					<div style={{ padding: '0 15px' }}>
						<h4>Can I get a refund after paying for a Bootcamp?</h4>
						<p>
							{' '}
							Once lessons begin, we offer a 14-day money back garantee if you're unhappy with the course{' '}
						</p>
					</div>
				</div>
			</div>
			<Link href="/course-details">
				<div className="text-center">
					<a style={{ padding: '14px', fontSize: '15px', textAlign: 'center' }} className="theme-btn">
						Learn More
						<i className="fas fa-arrow-right" />
					</a>
				</div>
			</Link>
			{/* <div className="bg-gray-50">
				<div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
						<h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
							Frequently asked questions
						</h2>
						<dl className="mt-6 space-y-6 divide-y divide-gray-200">
							{questions.map((faq) => (
								<Disclosure as="div" key={faq.question} className="pt-6">
									{({ open }) => (
										<>
											<dt className="text-lg">
												<Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
													<span className="font-medium text-gray-900">{faq.question}</span>
													<span className="ml-6 h-7 flex items-center">
														<ChevronDownIcon
															className={classNames(
																open ? '-rotate-180' : 'rotate-0',
																'h-6 w-6 transform'
															)}
															aria-hidden="true"
														/>
													</span>
												</Disclosure.Button>
											</dt>
											<Disclosure.Panel as="dd" className="mt-2 pr-12">
												<p className="text-base text-gray-500">{faq.answer}</p>
											</Disclosure.Panel>
										</>
									)}
								</Disclosure>
							))}
						</dl>
					</div>
				</div>
			</div>
		</div> */}
		</div>
	);
}

export default FAQ;
