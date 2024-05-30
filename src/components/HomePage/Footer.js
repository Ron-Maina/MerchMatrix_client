import React from 'react'
import { FaXTwitter, FaFacebook } from "react-icons/fa6";
import { FaGithub, FaYoutube } from "react-icons/fa";


function Footer() {
  return (
    <footer class="bg-gray-900" aria-labelledby="footer-heading">
        <h2 id="footer-heading" class="sr-only">Footer</h2>
        <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
            <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                <div class="space-y-8">
                    <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt=""
                    />                
                    <p class="text-sm leading-6 text-white">Find It, Love It, Buy It – The Ultimate Shopping Destination!</p>
                    <div class="flex space-x-6">
                        <a href="#" class="text-white hover:text-2xl">
                            <span class="sr-only">Facebook</span>
                            <FaFacebook />
                        </a>
                        <a href="#" class="text-white hover:text-2xl">
                            <span class="sr-only">X</span>
                            <FaXTwitter />
                        </a>
                        <a href="#" class="text-white hover:text-2xl">
                            <span class="sr-only">GitHub</span>
                            <FaGithub />
                        </a>
                        <a href="#" class="text-white hover:text-2xl">
                            <span class="sr-only">YouTube</span>
                            <FaYoutube />
                        </a>
                    </div>
                </div>

                <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                    <div>
                        <h3 class="text-sm font-semibold leading-6 text-white">Solutions</h3>
                        <ul role="list" class="mt-6 space-y-4">
                            <li>
                                <a href="#" class="text-sm leading-6 text-white hover:underline">Marketing</a>
                            </li>
                            <li>
                                <a href="#" class="text-sm leading-6 text-white hover:underline">Analytics</a>
                            </li>
                            <li>
                                <a href="#" class="text-sm leading-6 text-white hover:underline">Commerce</a>
                            </li>
                            <li>
                                <a href="#" class="text-sm leading-6 text-white hover:underline">Insights</a>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-10 md:mt-0">
                        <h3 class="text-sm font-semibold leading-6 text-white">Support</h3>
                        <ul role="list" class="mt-6 space-y-4">
                            <li>
                                <a href="#" class="text-sm leading-6 text-white hover:underline">Pricing</a>
                            </li>
                            <li>
                                <a href="#" class="text-sm leading-6 text-white hover:underline">Documentation</a>
                            </li>
                            <li>
                                <a href="#" class="text-sm leading-6 text-white hover:underline">Guides</a>
                            </li>
                            <li>
                                <a href="#" class="text-sm leading-6 text-white hover:underline">API Status</a>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                    <div>
                        <h3 class="text-sm font-semibold leading-6 text-white">Company</h3>
                        <ul role="list" class="mt-6 space-y-4">
                            <li>
                                <a href="#" class="text-sm leading-6 text-white hover:underline">About</a>
                            </li>
                            <li>
                                <a href="#" class="text-sm leading-6 text-white hover:underline">Blog</a>
                            </li>
                            <li>
                                <a href="#" class="text-sm leading-6 text-white hover:underline">Jobs</a>
                            </li>
                            <li>
                                <a href="#" class="text-sm leading-6 text-white hover:underline">Press</a>
                            </li>
                            <li>
                                <a href="#" class="text-sm leading-6 text-white hover:underline">Partners</a>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-10 md:mt-0">
                        <h3 class="text-sm font-semibold leading-6 text-white">Legal</h3>
                        <ul role="list" class="mt-6 space-y-4">
                            <li>
                                <a href="#" class="text-sm leading-6 text-white hover:underline">Claim</a>
                            </li>
                            <li>
                                <a href="#" class="text-sm leading-6 text-white hover:underline">Privacy</a>
                            </li>
                            <li>
                                <a href="#" class="text-sm leading-6 text-white hover:underline">Terms</a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>

            <div class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
                <p class="text-xs text-white leading-5">&copy; 2020 Your Company, Inc. All rights reserved.</p>
            </div>
            
        </div>
       
    </footer>
  )
}

export default Footer
