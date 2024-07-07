import TitleSection from "@/components/atoms/TitleSection";
import { FC } from "react";
import JobItem from "./JobItem";

interface FeaturedJobsProps {}
const FeaturedJobs: FC<FeaturedJobsProps> = ({}) => {
  return (
    <div className="mt-32 mb-10">
      <TitleSection word1="Featured" word2="jobs" />
      <div className="grid grid-cols-4 gap-8 mt-12">
        {[0, 1, 2].map((item: number) => (
          <JobItem
            key={item}
            image="/images/company.png"
            jobType="Full Time"
            name="Email Marketing"
            type="Agency"
            location="Paris, France"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt omnis est, expedita voluptatibus aliquam quidem ullam quae sequi non earum unde dolor voluptates officia, nihil praesentium! Perferendis corporis eius perspiciatis?"
            skills={["Marketing,Design"]}
            id={item.toString()}
            applicants={10}
            needs={100}
          />
        ))}
      </div>
    </div>
  );
};
export default FeaturedJobs;
