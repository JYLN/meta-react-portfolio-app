import { Box, HStack } from '@chakra-ui/react';
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react';

const socials = [
  {
    icon: faEnvelope,
    url: 'mailto: hello@example.com',
  },
  {
    icon: faGithub,
    url: 'https://github.com',
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com',
  },
  {
    icon: faMedium,
    url: 'https://medium.com',
  },
  {
    icon: faStackOverflow,
    url: 'https://stackoverflow.com',
  },
];

const Header = () => {
  const header = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const updateTransform = showHeader => {
      const headerEl = header.current;
      if (!headerEl) return;

      headerEl.style.transform = showHeader ? 'translateY(0)' : 'translateY(-200px)';
    };

    const handleScroll = () => {
      const currScrollPos = window.scrollY;
      const showHeader = prevScrollPos > currScrollPos;

      updateTransform(showHeader);
      prevScrollPos = currScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = anchor => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Box
      position='fixed'
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty='transform'
      transitionDuration='.3s'
      transitionTimingFunction='ease-in-out'
      backgroundColor='#18181b'
      zIndex={10}
      ref={header}>
      <Box color='white' maxWidth='1280px' margin='0 auto'>
        <HStack px={16} py={4} justifyContent='space-between' alignItems='center'>
          <nav>
            <HStack spacing={8}>
              {socials.map(({ icon, url }) => (
                <a key={url} href={url} target='_blank'>
                  <FontAwesomeIcon icon={icon} size='2x' />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href='#projects' onClick={handleClick('projects')}>
                Projects
              </a>
              <a href='#contact-me' onClick={handleClick('contactme')}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
