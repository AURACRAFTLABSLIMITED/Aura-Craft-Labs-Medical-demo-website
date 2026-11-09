import React, { useState } from 'react';
import TreatmentCard from './TreatmentCard';
import TreatmentDetailModal from './TreatmentDetailModal';
import { treatments, treatmentCategories } from '../data/treatments';

export default function TreatmentGrid({
  initialCategory = 'all',
  limit,
  showCategoryFilters = true
}) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [activeModalTreatment, setActiveModalTreatment] = useState(null);

  const filteredTreatments = treatments.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const displayedTreatments = limit ? filteredTreatments.slice(0, limit) : filteredTreatments;

  return (
    <div>
      {/* Category Filter Tabs (Functional segmented buttons) */}
      {showCategoryFilters && (
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {treatmentCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#159FA5] ${
                selectedCategory === cat.id
                  ? 'bg-[#159FA5] text-white shadow-xs'
                  : 'bg-[#F6FAFA] text-[#26383D] hover:bg-[#EAF7F7] hover:text-[#159FA5]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {displayedTreatments.map((treatment) => (
          <TreatmentCard
            key={treatment.id}
            treatment={treatment}
            onSelect={(item) => setActiveModalTreatment(item)}
          />
        ))}
      </div>

      {displayedTreatments.length === 0 && (
        <div className="text-center py-12 text-[#73858A]">
          <p>No treatments found in this category.</p>
        </div>
      )}

      {/* Detail Modal */}
      <TreatmentDetailModal
        treatment={activeModalTreatment}
        isOpen={Boolean(activeModalTreatment)}
        onClose={() => setActiveModalTreatment(null)}
      />
    </div>
  );
}
