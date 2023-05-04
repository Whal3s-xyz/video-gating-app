import clsx from 'clsx';

interface SidebarProps {
    currentStep: string;
    handleNextStep: (step: number) => void;
}
const steps = [
    {
        id: 'smartContractForm',
        step: 1,
        title: 'Collection',
    },
    {
        id: 'traitsForm',
        step: 2,
        title: 'Traits',
    },
    {
        id: 'fileForm',
        step: 3,
        title: 'File',
    },
    {
        id: 'proceed',
        step: 4,
        title: 'Process',
    },
];
export const Sidebar = ({ currentStep, handleNextStep }: SidebarProps) => {
    return (
        <aside className="bg-gradient-to-b from-gray-900 to-whal3s-800  min-h-[172px] bg-cover bg-no-repeat lg:rounded-xl">
            <nav>
                <ol className="flex justify-center pt-8 gap-4 lg:flex-col lg:w-60 lg:mx-autor">
                    {steps.map((step) => (
                        <li
                            className="flex gap-4 lg:ml-8 items-center"
                            key={step.step}
                        >
                            <button
                                className={clsx(
                                    'px-3 py-2 border border-white inline-flex rounded-full leading-none font-medium w-min h-min transition-colors duration-[400ms]',
                                    currentStep === step.id
                                        ? 'bg-primary-light-blue text-primary-marine-blue border-primary-light-blue'
                                        : 'text-white'
                                )}
                                onClick={() => handleNextStep(step.step)}
                            >
                                {step.step}
                            </button>
                            <span className="hidden lg:inline text-white uppercase">
								<p className="font-normal">Step {step.step}</p>
								<span className="font-bold">{step.title}</span>
							</span>
                        </li>
                    ))}
                </ol>
            </nav>
        </aside>
    );
};
