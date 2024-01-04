import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import lightLogo from '@/assets/logo/2Twelve-Logo-Final_White.svg'
import darkLogo from '@/assets/logo/2Twelve-Logo-Final_Black.svg'

function Logo() {
    return (
        <>
            <div className="inner-header p-relative">
                <div className="main-logo">
                    <Link href="/" data-dsn="parallax">
                        <Image
                            className="light-logo"
                            src={lightLogo}
                            data-dsn-src="@/assets/logo/2Twelve-Logo-Final_White.svg"
                            alt=""
                            width={170}
                            height={50}
                        />
                        <Image
                            className="dark-logo"
                            src={darkLogo}
                            data-dsn-src="@/assets/logo/2Twelve-Logo-Final_Black.svg"
                            alt=""
                            width={170}
                            height={50}
                        />
                    </Link>
                </div>
            </div>

        </>
    )
}

export default Logo