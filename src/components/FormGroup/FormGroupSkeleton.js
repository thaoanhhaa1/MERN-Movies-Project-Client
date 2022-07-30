import Skeleton from 'react-loading-skeleton';
import { CheckboxSkeleton } from '../Checkbox';

const FormGroupSkeleton = ({ type }) => {
    return (
        <div className="flex flex-col gap-[11px]">
            <Skeleton
                containerClassName="flex w-[80px]"
                className="!leading-5"
            />
            {(type === 'checkbox' && <CheckboxSkeleton />) || (
                <Skeleton
                    containerClassName="flex"
                    className="h-[46px] !rounded-full"
                />
            )}
        </div>
    );
};

export default FormGroupSkeleton;
