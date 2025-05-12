
import Image from 'next/image';
import React from 'react'

export default function LogoImage({
    url,
    className = "h-12 w-12 object-cover",
  }: {
    className?: string;
    url?: string;
  }) {
    return (
        <div>
           {
            url &&       <Image
            src={url }
            alt="user"
            className={`${className} rounded-full object-cover `}
            width={100}
            height={100}
          />
        }
      </div>

    );
  };
