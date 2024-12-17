import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div>
      <Link href="/about/product">
        <a>Product</a>
      </Link>
    </div>
  );
};

export default About;
