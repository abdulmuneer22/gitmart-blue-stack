import HomeNavigation from '~/components/navigation';


const AddToCartSection = () => <div className="flex flex-wrap sm:flex-row-reverse mx-auto container my-5 px-2">
    <div className="group relative ml-4">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-green opacity-0 group-hover:opacity-50 rounded transition ease-out duration-300" />
        <button className="p-1 w-full font-heading font-semibold text-xs text-gray-900 uppercase tracking-px overflow-hidden rounded">
            <div className="relative p-5 px-11 bg-gradient-green overflow-hidden rounded">
                <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-white transition ease-in-out duration-500" />
                <p className="relative z-10">Add To Cart</p>
            </div>
        </button>
    </div>
    <div className="group relative hidden md:inline">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-green opacity-0 group-hover:opacity-50 rounded transition ease-out duration-300" />
        <button className="p-1 w-full font-heading font-semibold text-xs text-gray-900 uppercase tracking-px overflow-hidden rounded">
            <div className="relative p-5 px-11 bg-gradient-green overflow-hidden rounded">
                <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-white transition ease-in-out duration-500" />
                <p className="relative z-10">Preview</p>
            </div>
        </button>
    </div>
</div>


export default function ProductDetails() {
    return (
        <div className="">
            <section className="relative background-animate overflow-hidden bg-black">
                <HomeNavigation />
                <div className="relative z-10 container mx-auto px-4"></div>
                <img
                    className="absolute bottom-0 left-0 w-full"
                    src="gradia-assets/elements/hero/line.svg"
                    alt=""
                />
            </section>
            <section className="overflow-hidden bg-black pt-12">
                <div className=" -m-3 bg-black">
                    <div className="container mx-auto px-6">
                        <h2 className="mb-5 font-heading font-bold text-4xl sm:text-5xl text-white">
                            PEEPS 3D Avatar-Maker Library
                        </h2>
                        <p className="mb-5 font-heading font-semibold text-xs text-gray-400 uppercase tracking-px">
                            Create your unique avatar
                        </p>
                    </div>
                    <AddToCartSection />
                    <div className="container mx-auto flex flex-wrap">
                        <div className="w-full md:w-1/2 p-3 xl:w-1/2">
                            <a className="group" href="#">
                                <div className="group flex flex-col justify-end h-full relative overflow-hidden rounded-10">
                                    <img
                                        className="mx-auto w-full transform group-hover:scale-110 transition ease-out duration-500"
                                        src="images/preview-01-1616943936661.png"
                                        alt=""
                                    />
                                    <div className="absolute bottom-0 left-0 w-full p-2.5"></div>
                                </div>
                            </a>
                        </div>
                        <div className="w-full md:w-1/2 p-3 xl:w-1/2">
                            <a className="group" href="#">
                                <div className="group flex flex-col justify-end h-full relative overflow-hidden rounded-10">
                                    <img
                                        className="mx-auto w-full transform group-hover:scale-110 transition ease-out duration-500"
                                        src="images/preview-01-1616943936661.png"
                                        alt=""
                                    />
                                    <div className="absolute bottom-0 left-0 w-full p-2.5"></div>
                                </div>
                            </a>
                        </div>
                        <div className="w-full md:w-1/2 p-3 xl:w-1/2">
                            <a className="group" href="#">
                                <div className="group flex flex-col justify-end h-full relative overflow-hidden rounded-10">
                                    <img
                                        className="mx-auto w-full transform group-hover:scale-110 transition ease-out duration-500"
                                        src="images/preview-01-1616943936661.png"
                                        alt=""
                                    />
                                    <div className="absolute bottom-0 left-0 w-full p-2.5"></div>
                                </div>
                            </a>
                        </div>
                        <div className="w-full md:w-1/2 p-3 xl:w-1/2">
                            <a className="group" href="#">
                                <div className="group flex flex-col justify-end h-full relative overflow-hidden rounded-10">
                                    <img
                                        className="mx-auto w-full transform group-hover:scale-110 transition ease-out duration-500"
                                        src="images/preview-01-1616943936661.png"
                                        alt=""
                                    />
                                    <div className="absolute bottom-0 left-0 w-full p-2.5"></div>
                                </div>
                            </a>
                        </div>
                        <div className="w-full md:w-1/2 p-3 xl:w-1/2">
                            <a className="group" href="#">
                                <div className="group flex flex-col justify-end h-full relative overflow-hidden rounded-10">
                                    <img
                                        className="mx-auto w-full transform group-hover:scale-110 transition ease-out duration-500"
                                        src="images/preview-01-1616943936661.png"
                                        alt=""
                                    />
                                    <div className="absolute bottom-0 left-0 w-full p-2.5"></div>
                                </div>
                            </a>
                        </div>
                        <div className="w-full md:w-1/2 p-3 xl:w-1/2">
                            <a className="group" href="#">
                                <div className="group flex flex-col justify-end h-full relative overflow-hidden rounded-10">
                                    <img
                                        className="mx-auto w-full transform group-hover:scale-110 transition ease-out duration-500"
                                        src="images/preview-01-1616943936661.png"
                                        alt=""
                                    />
                                    <div className="absolute bottom-0 left-0 w-full p-2.5"></div>
                                </div>
                            </a>
                        </div>
                        <div className="w-full md:w-1/2 p-3 xl:w-1/2">
                            <a className="group" href="#">
                                <div className="group flex flex-col justify-end h-full relative overflow-hidden rounded-10">
                                    <img
                                        className="mx-auto w-full transform group-hover:scale-110 transition ease-out duration-500"
                                        src="images/preview-01-1616943936661.png"
                                        alt=""
                                    />
                                    <div className="absolute bottom-0 left-0 w-full p-2.5"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative py-24 overflow-hidden bg-black">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center -m-6">
                        <div className="w-full lg:w-5/12 p-8 lg:p-16">
                            <div className="lg:max-w-md">
                                <h2 className="mb-10 font-heading font-bold text-4xl sm:text-5xl text-white">
                                    Overview
                                </h2>
                                <div>
                                    <div className="mb-6 bg-gradient-cyan h-px" />
                                    <div className="mb-5 flex flex-wrap items-center justify-between">
                                        <h3 className="font-heading font-bold text-lg text-white">
                                            Video Analytics
                                        </h3>
                                        <a href="#">
                                            <svg
                                                width={18}
                                                height={18}
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M3.75 11.25L9 6L14.25 11.25"
                                                    stroke="#18181B"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                    <p className="mb-5 text-base text-white">
                                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                                        amet sint. Velit officia consequat duis enim velit mollit.
                                    </p>
                                </div>
                                <div>
                                    <div className="mb-6 bg-gradient-cyan h-px" />
                                    <div className="mb-5 flex flex-wrap items-center justify-between">
                                        <h3 className="font-heading font-bold text-lg text-gray-900">
                                            Transaction History
                                        </h3>
                                        <a href="#">
                                            <svg
                                                width={18}
                                                height={18}
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M3.75 11.25L9 6L14.25 11.25"
                                                    stroke="#18181B"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-6 bg-gradient-cyan h-px" />
                                    <div className="mb-5 flex flex-wrap items-center justify-between">
                                        <h3 className="font-heading font-bold text-lg text-gray-900">
                                            Secured Payment
                                        </h3>
                                        <a href="#">
                                            <svg
                                                width={18}
                                                height={18}
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M3.75 11.25L9 6L14.25 11.25"
                                                    stroke="#18181B"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="mb-6 bg-gradient-cyan h-px" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-4 pb-4 overflow-hidden bg-black">
                <div className="container mx-auto px-4">
                    <div className="w-auto  flex flex-col items-center my-8">
                        <a href="#">
                            <img src="gradia-assets/logos/gradia-name-white.svg" alt="" />
                        </a>
                    </div>
                    <p className="mb-5 font-heading font-semibold text-xs text-gray-400 text-center uppercase tracking-px">
                        See more products from Gradia
                    </p>
                    <section className="overflow-hidden bg-black mt-12">
                        <div className="flex flex-wrap -m-3 bg-black">
                            <div className="container mx-auto flex flex-wrap">
                                <div className="w-full md:w-1/3 p-3 xl:w-1/3">
                                    <a className="group" href="#">
                                        <div className="group flex flex-col justify-end h-full relative overflow-hidden rounded-10">
                                            <img
                                                className="mx-auto w-full transform group-hover:scale-110 transition ease-out duration-500"
                                                src="images/1-1661435570012.png"
                                                alt=""
                                            />
                                            <div className="absolute bottom-0 left-0 w-full p-2.5"></div>
                                        </div>
                                    </a>
                                </div>
                                <div className="w-full md:w-1/3 p-3 xl:w-1/3">
                                    <a className="group" href="#">
                                        <div className="group flex flex-col justify-end h-full relative overflow-hidden rounded-10">
                                            <img
                                                className="mx-auto w-full transform group-hover:scale-110 transition ease-out duration-500"
                                                src="images/preview-01-1616943936661.png"
                                                alt=""
                                            />
                                            <div className="absolute bottom-0 left-0 w-full p-2.5"></div>
                                        </div>
                                    </a>
                                </div>
                                <div className="w-full md:w-1/3 p-3 xl:w-1/3">
                                    <a className="group" href="#">
                                        <div className="group flex flex-col justify-end h-full relative overflow-hidden rounded-10">
                                            <img
                                                className="mx-auto w-full transform group-hover:scale-110 transition ease-out duration-500"
                                                src="images/preview-01-1616943936661.png"
                                                alt=""
                                            />
                                            <div className="absolute bottom-0 left-0 w-full p-2.5"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <section className="py-28 bg-black overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="max-w-lg mx-auto text-center mb-14">
                        <img
                            className="mx-auto mb-8"
                            src="gradia-assets/images/newsletter/email.svg"
                            alt=""
                        />
                        <h2 className="mb-5 font-heading font-semibold text-6xl sm:text-7xl text-white">
                            Get your free ui kit
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Get a fully coded ui kit for free by signing up to our news letter. We
                            take your privacy seriously, We will not spam you.
                        </p>
                    </div>
                    <div className="flex flex-wrap max-w-xl mx-auto -m-2.5">
                        <div className="w-full p-2.5">
                            <input
                                className="w-full px-5 py-4 text-gray-500 text-base bg-transparent border border-gray-800 focus:border-gray-700 outline-none focus:ring-4 focus:ring-indigo-500 placeholder-gray-500 rounded"
                                type="text"
                                placeholder="Your name"
                            />
                        </div>
                        <div className="w-full p-2.5">
                            <input
                                className="w-full px-5 py-4 text-gray-500 text-base bg-transparent border border-gray-800 focus:border-gray-700 outline-none focus:ring-4 focus:ring-indigo-500 placeholder-gray-500 rounded"
                                type="text"
                                placeholder="Your email address"
                            />
                        </div>
                        <div className="w-full p-2.5">
                            <div className="group relative">
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-green opacity-0 group-hover:opacity-50 rounded transition ease-out duration-300" />
                                <button className="p-1 w-full font-heading font-semibold text-xs text-gray-900 uppercase tracking-px overflow-hidden rounded">
                                    <div className="relative p-5 px-11 bg-gradient-green overflow-hidden rounded">
                                        <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-white transition ease-in-out duration-500" />
                                        <p className="relative z-10">Subscribe now</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="w-full p-2.5">
                            <p className="text-sm text-gray-500 text-center">
                                We never share your information to any third party
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative py-24 bg-black overflow-hidden">
                <img
                    className="absolute bottom-0 left-0"
                    src="gradia-assets/elements/footers/radial2.svg"
                    alt=""
                />
                <div className="relative z-10 container mx-auto px-4">
                    <div className="flex flex-wrap -m-6">
                        <div className="w-full md:w-1/2 lg:w-5/12 p-6">
                            <div className="flex flex-col justify-between h-full max-w-sm">
                                <div className="mb-11">
                                    <img src="gradia-assets/logos/gradia-name-white.svg" alt="" />
                                </div>
                                <div>
                                    <p className="mb-14 text-gray-200 text-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
                                        dui convallis sagittis tempus mi viverra eget. Quisque justo,
                                        blandit orci.
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        © Copyright 2022. All Rights Reserved by Gradia.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-2/12 p-6">
                            <div className="h-full">
                                <h3 className="mb-7 font-heading font-medium text-base text-gray-500 tracking-px">
                                    Company
                                </h3>
                                <ul>
                                    <li className="mb-4">
                                        <a
                                            className="font-heading font-medium text-base text-white hover:text-gray-200"
                                            href="#"
                                        >
                                            Support
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a
                                            className="font-heading font-medium text-base text-white hover:text-gray-200"
                                            href="#"
                                        >
                                            Open a shop
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a
                                            className="font-heading font-medium text-base text-white hover:text-gray-200"
                                            href="#"
                                        >
                                            Licencing &amp; Terms
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="font-heading font-medium text-base text-white hover:text-gray-200"
                                            href="#"
                                        >
                                            Cookie Policy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-2/12 p-6">
                            <div className="h-full">
                                <h3 className="mb-7 font-heading font-medium text-base text-gray-500 tracking-px">
                                    Support
                                </h3>
                                <ul>
                                    <li className="mb-4">
                                        <a
                                            className="font-heading font-medium text-base text-white hover:text-gray-200"
                                            href="#"
                                        >
                                            Account
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a
                                            className="font-heading font-medium text-base text-white hover:text-gray-200"
                                            href="#"
                                        >
                                            Help
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a
                                            className="font-heading font-medium text-base text-white hover:text-gray-200"
                                            href="#"
                                        >
                                            Contact Us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="font-heading font-medium text-base text-white hover:text-gray-200"
                                            href="#"
                                        >
                                            Customer Support
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-3/12 p-6">
                            <div className="flex flex-col justify-between h-full">
                                <div>
                                    <h3 className="mb-7 font-heading font-medium text-base text-gray-500 tracking-px">
                                        Contact Info
                                    </h3>
                                    <ul className="mb-6">
                                        <li className="mb-4 font-heading font-medium text-base text-white">
                                            market@gitspark.com
                                        </li>
                                        <li className="font-heading font-medium text-base text-white">
                                            +971 (520) 401 3333
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-wrap items-center -ml-5">
                                    <div className="w-auto p-5">
                                        <a href="#">
                                            <svg
                                                width={14}
                                                height={12}
                                                viewBox="0 0 14 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M13.6488 1.58924C13.137 1.81672 12.5967 1.9589 12.028 2.0442C12.5967 1.70298 13.0517 1.16271 13.2507 0.508707C12.7105 0.821493 12.1133 1.04897 11.4593 1.19115C10.9475 0.650883 10.2082 0.309662 9.41201 0.309662C7.87652 0.309662 6.62537 1.5608 6.62537 3.0963C6.62537 3.32378 6.65381 3.52283 6.71068 3.72187C4.40744 3.60813 2.33168 2.49916 0.938358 0.793058C0.710877 1.21958 0.568702 1.67455 0.568702 2.18638C0.568702 3.15317 1.0521 4.00622 1.81985 4.51805C1.36488 4.48962 0.938358 4.37588 0.540266 4.17683V4.20527C0.540266 5.57015 1.50706 6.70755 2.78664 6.96347C2.55916 7.02034 2.30324 7.04877 2.04733 7.04877C1.87672 7.04877 1.67767 7.02034 1.50706 6.9919C1.87672 8.10087 2.90038 8.92549 4.12309 8.92549C3.15629 9.6648 1.96202 10.1198 0.654007 10.1198C0.426526 10.1198 0.199046 10.1198 0 10.0913C1.25114 10.8875 2.70133 11.3425 4.2937 11.3425C9.44045 11.3425 12.2555 7.07721 12.2555 3.38065C12.2555 3.26691 12.2555 3.12473 12.2555 3.01099C12.7958 2.64134 13.2792 2.15794 13.6488 1.58924Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="w-auto p-5">
                                        <a href="#">
                                            <svg
                                                width={8}
                                                height={15}
                                                viewBox="0 0 8 15"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M2.34923 14.8715V8.08792H0.0664062V5.44422H2.34923V3.49457C2.34923 1.23201 3.73112 0 5.74948 0C6.71629 0 7.54722 0.0719815 7.78937 0.104155V2.46866L6.38954 2.4693C5.29184 2.4693 5.0793 2.9909 5.0793 3.75633V5.44422H7.6972L7.35634 8.08792H5.07929V14.8715H2.34923Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="w-auto p-5">
                                        <a href="#">
                                            <svg
                                                width={18}
                                                height={17}
                                                viewBox="0 0 18 17"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8.78828 1.49101C10.9976 1.49101 11.2592 1.49928 12.132 1.53908C12.6568 1.5455 13.1765 1.64186 13.6687 1.82396C14.0257 1.96161 14.3498 2.17247 14.6203 2.44298C14.8908 2.71348 15.1017 3.03763 15.2393 3.39456C15.4214 3.88675 15.5178 4.40652 15.5242 4.93127C15.5636 5.80404 15.5723 6.06568 15.5723 8.275C15.5723 10.4843 15.564 10.746 15.5242 11.6187C15.5178 12.1435 15.4214 12.6633 15.2393 13.1554C15.1017 13.5124 14.8908 13.8365 14.6203 14.107C14.3498 14.3775 14.0257 14.5884 13.6687 14.726C13.1765 14.9081 12.6568 15.0045 12.132 15.0109C11.2596 15.0503 10.998 15.059 8.78828 15.059C6.57857 15.059 6.31693 15.0507 5.44455 15.0109C4.91979 15.0045 4.40003 14.9081 3.90784 14.726C3.55091 14.5884 3.22676 14.3775 2.95626 14.107C2.68575 13.8365 2.47489 13.5124 2.33724 13.1554C2.15513 12.6633 2.05878 12.1435 2.05236 11.6187C2.01295 10.746 2.00428 10.4843 2.00428 8.275C2.00428 6.06568 2.01256 5.80404 2.05236 4.93127C2.05878 4.40652 2.15513 3.88675 2.33724 3.39456C2.47489 3.03763 2.68575 2.71348 2.95626 2.44298C3.22676 2.17247 3.55091 1.96161 3.90784 1.82396C4.40003 1.64186 4.91979 1.5455 5.44455 1.53908C6.31732 1.49967 6.57896 1.49101 8.78828 1.49101ZM8.78828 0C6.54232 0 6.2594 0.00945666 5.37678 0.0496476C4.69 0.0633078 4.01052 0.193342 3.36723 0.43422C2.81539 0.642135 2.31556 0.967957 1.90262 1.38895C1.48125 1.80204 1.15515 2.30215 0.947104 2.85435C0.706226 3.49764 0.576192 4.17712 0.562531 4.86389C0.523129 5.74573 0.513672 6.02864 0.513672 8.27461C0.513672 10.5206 0.523129 10.8035 0.56332 11.6861C0.57698 12.3729 0.707014 13.0524 0.947892 13.6957C1.15571 14.2478 1.48153 14.7479 1.90262 15.161C2.31579 15.5821 2.8159 15.908 3.36802 16.1158C4.01131 16.3567 4.69079 16.4867 5.37757 16.5004C6.26019 16.5398 6.54192 16.55 8.78907 16.55C11.0362 16.55 11.3179 16.5405 12.2006 16.5004C12.8873 16.4867 13.5668 16.3567 14.2101 16.1158C14.7596 15.9028 15.2586 15.5774 15.6752 15.1606C16.0918 14.7437 16.4168 14.2445 16.6295 13.6949C16.8703 13.0516 17.0004 12.3721 17.014 11.6853C17.0534 10.8035 17.0629 10.5206 17.0629 8.27461C17.0629 6.02864 17.0534 5.74573 17.0132 4.8631C16.9996 4.17633 16.8695 3.49685 16.6287 2.85356C16.4209 2.30144 16.095 1.80133 15.6739 1.38816C15.2608 0.967073 14.7607 0.641246 14.2085 0.433432C13.5653 0.192554 12.8858 0.0625198 12.199 0.0488596C11.3172 0.00945672 11.0342 0 8.78828 0Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M8.78632 4.02582C7.94591 4.02582 7.12436 4.27503 6.42559 4.74194C5.72681 5.20885 5.18218 5.87248 4.86056 6.64892C4.53895 7.42537 4.4548 8.27974 4.61876 9.104C4.78272 9.92827 5.18741 10.6854 5.78168 11.2797C6.37594 11.8739 7.13307 12.2786 7.95734 12.4426C8.78161 12.6065 9.63598 12.5224 10.4124 12.2008C11.1889 11.8792 11.8525 11.3345 12.3194 10.6358C12.7863 9.93698 13.0355 9.11544 13.0355 8.27503C13.0355 7.14807 12.5878 6.06726 11.791 5.27038C10.9941 4.4735 9.91328 4.02582 8.78632 4.02582ZM8.78632 11.0332C8.2408 11.0332 7.70753 10.8715 7.25394 10.5684C6.80036 10.2653 6.44683 9.83454 6.23807 9.33054C6.02931 8.82655 5.97469 8.27197 6.08111 7.73693C6.18754 7.20189 6.45023 6.71042 6.83598 6.32468C7.22172 5.93894 7.71318 5.67625 8.24822 5.56982C8.78326 5.4634 9.33784 5.51802 9.84184 5.72678C10.3458 5.93554 10.7766 6.28907 11.0797 6.74265C11.3828 7.19623 11.5445 7.7295 11.5445 8.27503C11.5445 9.00655 11.2539 9.70811 10.7367 10.2254C10.2194 10.7426 9.51784 11.0332 8.78632 11.0332Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M13.2058 4.85053C13.7542 4.85053 14.1988 4.40597 14.1988 3.85758C14.1988 3.30918 13.7542 2.86462 13.2058 2.86462C12.6575 2.86462 12.2129 3.30918 12.2129 3.85758C12.2129 4.40597 12.6575 4.85053 13.2058 4.85053Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <a
                className=" inline-block group p-0.5 font-heading text-base text-gray-900 font-bold bg-white hover:bg-gray-50 bg-gradient-cyan overflow-hidden rounded-md"
                href="#"
            ></a>
        </div>

    );
}
