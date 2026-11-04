/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */

import NextLink from 'next/link';

export default function Link({ children, href, ...props }) {
  return (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  );
}
