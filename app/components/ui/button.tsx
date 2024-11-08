import classNames from 'classnames';
import { type SfButtonProps, SfButtonSize, SfButtonVariant, polymorphicForwardRef } from '@storefront-ui/react';

const defaultButtonTag = 'button';

const variantClasses = {
  [SfButtonVariant.primary]:
    'text-white active:shadow bg-primary-500 hover:bg-primary-900 active:bg-primary-900 disabled:bg-disabled-300',
  [SfButtonVariant.secondary]:
    'text-primary-500 hover:bg-primary-100 active:bg-primary-200 active:text-primary-900 border border-primary-500 disabled:bg-white/50',
  [SfButtonVariant.tertiary]:
    'text-primary-500 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent',

};



const getSizeClasses = (size: SfButtonProps['size'], square: SfButtonProps['square']) => {
  switch (size) {
    case SfButtonSize.sm:
      return [square ? 'p-1.5' : 'leading-5 text-sm py-1.5 px-3', 'gap-1.5'];
    case SfButtonSize.lg:
      return [square ? 'p-4' : 'py-3 leading-6 px-6', 'gap-3'];
    default:
      return [square ? 'p-2' : 'py-2 leading-6 px-4', 'gap-2'];
  }
};

const Button = polymorphicForwardRef<typeof defaultButtonTag, SfButtonProps>((props, ref) => {
  const {
    as,
    className,
    size = SfButtonSize.base,
    variant = SfButtonVariant.primary,
    square,
    children,
    slotPrefix,
    slotSuffix,
    ...attributes
  } = props;
  const Tag = as || defaultButtonTag;

  return (
    <Tag
      ref={ref}
      type={typeof Tag === 'string' && Tag.toLowerCase() === 'button' ? 'button' : undefined}
      className={classNames(
        'inline-flex items-center justify-center font-medium text-base ease-in-out duration-200 focus-visible:outline focus-visible:outline-offset disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed',
        getSizeClasses(size, square),
        variantClasses[variant],
        className,
      )}
      data-testid="button"
      {...attributes}
    >
      {slotPrefix}
      {children}
      {slotSuffix}
    </Tag>
  );
});

export default Button;

