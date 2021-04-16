import React from 'react';
import { Link, HStack, Box } from '@chakra-ui/react';
import { navItems } from './constants';

const socialLinkItems = navItems.filter(item => item.categories.includes('social'));

function Icon({ name, className, size }) {
    let iconContent = null;
    switch (name) {
        case 'Twitter':
            iconContent = (
                <svg
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    strokeLinejoin="round"
                    strokeMiterlimit="2"
                >
                    <path
                        className="symphonyFill"
                        d="M256 0a256 256 0 110 512 256 256 0 010-512zm-45 392c113 0 175-94 175-175v-8c12-9 22-20 31-32-11 5-23 8-36 10 13-8 23-20 27-34-11 7-25 12-39 15a62 62 0 00-105 56c-51-3-96-27-126-65a62 62 0 0019 83c-10-1-20-3-28-8v1c0 30 21 54 49 60a61 61 0 01-27 1c7 25 30 42 57 43a124 124 0 01-91 25c27 18 59 28 94 28z"
                    />
                </svg>
            );
            break;
        case 'Youtube':
            iconContent = (
                <svg
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    strokeLinejoin="round"
                    strokeMiterlimit="2"
                >
                    <path
                        className="symphonyFill"
                        d="M256 0a256 256 0 110 512 256 256 0 010-512zm153 179c-3-14-14-25-28-28-25-7-125-7-125-7s-100 0-125 7c-14 3-25 14-28 28-7 25-7 77-7 77s0 52 7 77c3 14 14 25 28 28 25 7 125 7 125 7s100 0 125-7c14-3 25-14 28-28 7-25 7-77 7-77s0-52-7-77zM224 304v-96l83 48-83 48z"
                    />
                </svg>
            );
            break;
        case 'Discord':
            iconContent = (
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="256" cy="256" r="256" className="symphonyFill" />
                    <path
                        d="M372 169s-33-26-72-29l-4 7c36 8 52 21 69 36-29-15-58-29-109-29s-80 14-109 29c17-15 37-29 69-36l-3-7c-42 3-73 29-73 29s-37 54-44 160c38 43 95 43 95 43l12-16c-21-7-43-19-63-42 23 18 59 37 116 37s93-19 117-37c-20 23-43 35-63 42l12 16s57 0 94-43c-6-106-44-160-44-160zM209 300c-14 0-26-13-26-29s12-30 26-30 25 13 25 30-11 29-25 29zm94 0c-14 0-25-13-25-29s11-30 25-30 26 13 26 30-12 29-26 29z"
                        fill="#FFF"
                    />
                </svg>
            );
            break;
        case 'Blog':
            iconContent = (
                <svg
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    strokeLinejoin="round"
                    strokeMiterlimit="2"
                >
                    <path
                        className="symphonyFill"
                        d="M511 256a255 255 0 10-255 255c141 0 255-114 255-255zm-229 0c0 63-51 114-113 114S56 319 56 256s51-114 113-114 113 51 113 114zm123 0c0 59-25 107-56 107s-56-48-56-107 25-107 56-107 56 48 56 107zm51 0c0 53-9 96-20 96s-20-43-20-96 9-96 20-96 20 43 20 96z"
                    />
                </svg>
            );
            break;
        default:
    }
    return (
        <Box background="#fff" w={size || '25px'} h={size || '25px'} borderRadius="100%">
            <Box className="socialIcon">{iconContent}</Box>
        </Box>
    );
}

function SocialLinks({ size, spacing, ...rest }) {
    return (
        <HStack spacing={spacing || 10} {...rest}>
            {socialLinkItems.map(item => (
                <Link href={item.url} key={item.url} target="_blank" rel="noopenner noreferrrer">
                    <Icon name={item.name} className="socialIcon" size={size || 30} />
                </Link>
            ))}
        </HStack>
    );
}

export default SocialLinks;
