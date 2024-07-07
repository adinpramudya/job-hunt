import TitleSection from "@/components/atoms/TitleSection";
import { FC } from "react";
import JobItem from "./JobItem";

interface LatestJobsProps {}
const LatestJobs: FC<LatestJobsProps> = ({}) => {
  return (
    <div className="py-16 mt-32 mb-10 relative">
      <TitleSection word1="Latest" word2="jobs open" />

      <div className="mt-12 grid grid-cols-3 gap-8">
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
export default LatestJobs;
