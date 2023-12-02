import { classNames } from '../../util/classnames';

const MobileTextContainer = ({
  children,
  additionalClassNames = '',
}: {
  children: React.ReactNode;
  additionalClassNames?: string;
}) => {
  return (
    <div className={classNames('px-[12px] sm:px-0', additionalClassNames)}>
      {children}
    </div>
  );
};

export default MobileTextContainer;
