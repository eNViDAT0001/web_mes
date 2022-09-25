const CategoriesAndShare = () => {
    return(
        <div>
            <h1 className="mt-6 text-purple-text">Categories:</h1>
                <div className=" mt-12 flex flex-row justify-start ">
                    <h1 className=" text-purple-text">Share</h1>
                    <div className=" w-14 h-3 mt-2 flex flex-row">
                        <svg className="ml-4"   width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="6" fill="#151875"/>
                            <path d="M6.68689 8.6391V6.01638H7.57169L7.70321 4.9895H6.68689V4.33542C6.68689 4.0391 6.76945 3.83622 7.19473 3.83622H7.73361V2.9207C7.47142 2.8926 7.20787 2.87903 6.94417 2.88006C6.16209 2.88006 5.62513 3.3575 5.62513 4.23398V4.98758H4.74609V6.01446H5.62705V8.6391H6.68689Z" fill="white"/>
                        </svg>
                        <svg className="ml-2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="6" fill="#FB2E86"/>
                            <path d="M8.62242 4.5777C8.61919 4.33534 8.57382 4.09539 8.48834 3.86858C8.41421 3.67727 8.30099 3.50353 8.15591 3.35845C8.01083 3.21337 7.83709 3.10015 7.64578 3.02602C7.42189 2.94198 7.18535 2.89653 6.94626 2.89162C6.63842 2.87786 6.54082 2.87402 5.75938 2.87402C4.97794 2.87402 4.87778 2.87402 4.57218 2.89162C4.33319 2.89657 4.09677 2.94201 3.87298 3.02602C3.68164 3.1001 3.50786 3.2133 3.36278 3.35839C3.2177 3.50347 3.10449 3.67724 3.03042 3.86858C2.9462 4.09231 2.90086 4.32878 2.89634 4.56778C2.88258 4.87594 2.87842 4.97354 2.87842 5.75498C2.87842 6.53642 2.87842 6.63626 2.89634 6.94218C2.90114 7.18154 2.94626 7.4177 3.03042 7.64202C3.10462 7.83331 3.2179 8.00701 3.36304 8.15203C3.50817 8.29705 3.68196 8.41021 3.8733 8.48426C4.09648 8.57169 4.33294 8.62038 4.5725 8.62826C4.88066 8.64202 4.97826 8.64618 5.7597 8.64618C6.54114 8.64618 6.6413 8.64618 6.9469 8.62826C7.18599 8.62355 7.42253 8.57822 7.64642 8.49418C7.83768 8.41997 8.01138 8.30672 8.15645 8.16165C8.30151 8.01659 8.41476 7.84288 8.48898 7.65162C8.57314 7.42762 8.61826 7.19146 8.62306 6.95178C8.63682 6.64394 8.64098 6.54634 8.64098 5.76458C8.64034 4.98314 8.64034 4.88394 8.62242 4.5777ZM5.75746 7.23274C4.94018 7.23274 4.2781 6.57066 4.2781 5.75338C4.2781 4.9361 4.94018 4.27402 5.75746 4.27402C6.14981 4.27402 6.52609 4.42988 6.80352 4.70732C7.08096 4.98475 7.23682 5.36103 7.23682 5.75338C7.23682 6.14573 7.08096 6.52201 6.80352 6.79945C6.52609 7.07688 6.14981 7.23274 5.75746 7.23274ZM7.2957 4.56426C7.10466 4.56426 6.95074 4.41002 6.95074 4.2193C6.95074 4.17402 6.95966 4.12919 6.97698 4.08735C6.99431 4.04552 7.01971 4.00751 7.05173 3.97549C7.08374 3.94348 7.12176 3.91808 7.16359 3.90075C7.20542 3.88342 7.25026 3.8745 7.29554 3.8745C7.34082 3.8745 7.38565 3.88342 7.42749 3.90075C7.46932 3.91808 7.50733 3.94348 7.53935 3.97549C7.57137 4.00751 7.59676 4.04552 7.61409 4.08735C7.63142 4.12919 7.64034 4.17402 7.64034 4.2193C7.64034 4.41002 7.4861 4.56426 7.2957 4.56426Z" fill="white"/>
                            <path d="M5.75784 6.71416C6.28856 6.71416 6.7188 6.28392 6.7188 5.7532C6.7188 5.22247 6.28856 4.79224 5.75784 4.79224C5.22711 4.79224 4.79688 5.22247 4.79688 5.7532C4.79688 6.28392 5.22711 6.71416 5.75784 6.71416Z" fill="white"/>
                        </svg>
                        <svg className="ml-2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="6" fill="#151875"/>
                            <g clipPath="url(#clip0_108_8634)">
                            <path d="M9.48613 3.49984C9.21893 3.61824 8.93189 3.69824 8.63013 3.7344C8.94149 3.54809 9.17444 3.25487 9.28549 2.90944C8.99297 3.0832 8.67281 3.2055 8.33893 3.27104C8.11442 3.03132 7.81703 2.87242 7.49296 2.81903C7.16888 2.76564 6.83625 2.82073 6.54669 2.97576C6.25714 3.13079 6.02686 3.37708 5.89162 3.67639C5.75639 3.97569 5.72375 4.31128 5.79877 4.63104C5.20603 4.60128 4.62618 4.44722 4.09683 4.17885C3.56749 3.91048 3.10048 3.53381 2.72613 3.07328C2.59813 3.29408 2.52453 3.55008 2.52453 3.82272C2.52439 4.06816 2.58483 4.30984 2.7005 4.52631C2.81616 4.74279 2.98347 4.92737 3.18757 5.06368C2.95086 5.05615 2.71937 4.99219 2.51237 4.87712V4.89632C2.51235 5.24056 2.63143 5.5742 2.84939 5.84064C3.06736 6.10708 3.3708 6.2899 3.70821 6.35808C3.48863 6.41751 3.2584 6.42626 3.03493 6.38368C3.13013 6.67988 3.31557 6.93889 3.56529 7.12445C3.81501 7.31002 4.11651 7.41286 4.42757 7.41856C3.89952 7.83309 3.24738 8.05795 2.57605 8.05696C2.45714 8.05699 2.33832 8.05005 2.22021 8.03616C2.90165 8.47429 3.69488 8.70682 4.50501 8.70592C7.24741 8.70592 8.74661 6.43456 8.74661 4.46464C8.74661 4.40064 8.74501 4.336 8.74214 4.272C9.03375 4.06111 9.28547 3.79997 9.48549 3.5008L9.48613 3.49984Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_108_8634">
                            <rect width="7.68" height="7.68" fill="white" transform="translate(1.91992 1.92004)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
        </div>
    )
}
export default CategoriesAndShare