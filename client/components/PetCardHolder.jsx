import React from 'react';
import PetCard from './PetCard';

function PetCardHolder() {
  return (
    <div className="petCardHolder">
      {/* elements go here */}
      <PetCard />
      <PetCard />
      <PetCard />
      <PetCard />
      <PetCard />
      <PetCard />
    </div>
  );
}

export default PetCardHolder;