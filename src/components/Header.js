import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const internalLinks = [
  {
    name: 'projects',
    displayName: 'Projects',
  },
  {
    name: 'contactme',
    displayName: 'Contact Me',
  },
]

const Header = () => {
  const handleClick = (anchor) => () => {
    console.log('hello');
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const socialsLinkItems = socials.map(social => {
    return <a href={social.url}>
      <FontAwesomeIcon icon={social.icon} size="2x" />
    </a>
  });

  const internalLinksItems = internalLinks.map(internalLink => {
    return <a href={'#' + internalLink.name} onClick={handleClick(internalLink.name)}>
      {internalLink.displayName}
    </a>
  });

  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currScrollY = window.scrollY;
      const currHeader = headerRef.current;

      if(!currHeader) return;

      if(prevScrollY > currScrollY) {
        currHeader.style.transform = "translateY(0)";
      } else {
        currHeader.style.transform = "translateY(-200px)";
      }

      prevScrollY = currScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socialsLinkItems}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {internalLinksItems}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
