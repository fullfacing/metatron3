/** @jsx jsx */
import React, { Component } from 'react';
import { jsx, Flex } from 'theme-ui';
import ReactModal from 'react-modal';
import { X, ArrowLeft } from 'react-feather';

import IconButton from './icon-botton';
import Text from './text';

ReactModal.setAppElement('body');

class ModalWrapper extends Component {
  static defaultProps = {
    isOpen: false,
    contentLabel: '',
    closeTimeoutMS: 300,
    style: {},
    contentStyle: {},
    wrapperStyle: {},
    width: 'fit-content',
    height: 'fit-content',
    scrollable: true,
    centerTitle: false,
    hideCloseButton: false,
  };

  state = {
    contentSpacing: 0,
  };

  afterOpenModal = () => {
    const headerHeight = this.headerRef ? this.headerRef.clientHeight : 0;
    const footerHeight = this.footerRef ? this.footerRef.clientHeight : 0;
    let contentSpacing = headerHeight + footerHeight;

    this.setState({ contentSpacing });
  };

  renderBackButton = (onBack) => (
    <IconButton
      label="back"
      onClick={onBack}
      sx={{
        position: 'absolute',
        top: '6',
        left: '4',
        zIndex: 1,
      }}
    >
      <ArrowLeft />
    </IconButton>
  );

  renderCloseIcon = (onClose) => (
    <IconButton
      label="close"
      onClick={onClose}
      sx={{
        position: 'absolute',
        top: '6',
        right: '4',
        zIndex: 9999,
      }}
    >
      <X />
    </IconButton>
  );

  render() {
    const { contentSpacing } = this.state;

    const {
      onClose,
      onBack,
      style,
      contentStyle,
      wrapperStyle,
      children,
      width,
      height,
      title,
      centerTitle,
      subtitle,
      description,
      actions,
      footer,
      scrollable,
      hideCloseButton,
      sx,
      ...otherProps
    } = this.props;

    const hasHeader = !!title || !!description || !!subtitle || !!actions;

    const modalStyles = {
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, .3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      content: {
        border: '1px solid gray',
        backgroundColor: 'white',
        position: 'relative',
        top: 'unset',
        left: 'unset',
        right: 'unset',
        bottom: 'unset',
        borderRadius: '1em',
        padding: '2em 2em 0',
        overflow: scrollable ? 'auto' : 'visible',
        maxWidth: '95vw',
        maxHeight: '95vh',
        width,
        height,
        ...style,
      },
    };

    return (
      <ReactModal
        onRequestClose={onClose}
        onAfterOpen={this.afterOpenModal}
        style={modalStyles}
        sx={sx}
        {...otherProps}
      >
        <React.Fragment>
          {onClose && !hideCloseButton && this.renderCloseIcon(onClose)}
          {onBack && this.renderBackButton(onBack)}

          <div sx={{ maxWidth: 1100 }} ref={(node) => (this.headerRef = node)}>
            {title && (
              <Flex
                sx={{
                  width: '100%',
                  justifyContent: centerTitle ? 'center' : 'flex-start',
                  pl: onBack && !centerTitle ? '2.5em' : 0,
                }}
              >
                <Text sx={{ fontSize: 4, fontWeight: 'bold', mt: 2, pt: 1 }}>{title}</Text>
              </Flex>
            )}

            {subtitle && <Text sx={{ fontSize: 3, fontWeight: 'bold' }}>{subtitle}</Text>}
            {description && (
              <Text
                sx={{
                  textAlign: centerTitle ? 'center' : 'left',
                  pt: '1.4em',
                }}
              >
                {description}
              </Text>
            )}
            {actions && <div sx={{ pt: '2em' }}>{actions}</div>}
          </div>

          <div sx={{ position: 'relative', maxWidth: 1100, m: '1em 0', ...wrapperStyle }}>
            {scrollable && (
              <div
                sx={{
                  position: 'absolute',
                  pointerEvents: 'none',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background:
                    'linear-gradient(white 0%, transparent 1.5em, transparent calc(100% - 1em), white 100% )',
                }}
              />
            )}

            <div
              sx={{
                padding: '1em',
                margin: hasHeader ? '0 -1em' : '-2em -1em 0',
                maxHeight: scrollable ? `calc(95vh - 5em - ${contentSpacing}px)` : 'none',
                maxWidth: 1100,
                overflow: scrollable ? 'auto' : 'visible',
                ...contentStyle,
              }}
            >
              {children}
            </div>
          </div>

          {footer && (
            <Flex
              sx={{
                justifyContent: 'flex-end',
                padding: '0 0 2em',
              }}
              ref={(node) => (this.footerRef = node)}
            >
              {footer}
            </Flex>
          )}
        </React.Fragment>
      </ReactModal>
    );
  }
}

export default ModalWrapper;
