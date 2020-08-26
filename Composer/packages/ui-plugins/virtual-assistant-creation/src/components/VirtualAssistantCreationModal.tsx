// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React, { useState } from 'react';
import formatMessage from 'format-message';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { FontWeights } from '@uifabric/styling';
import { FontSizes, NeutralColors } from '@uifabric/fluent-theme';
import { RouteComponentProps } from '@reach/router';

const styles = {
  dialog: {
    title: {
      fontWeight: FontWeights.bold,
      fontSize: FontSizes.size20,
      paddingTop: '14px',
      paddingBottom: '11px',
    },
    subText: {
      fontSize: FontSizes.size14,
    },
  },
  modal: {
    main: {
      maxWidth: '800px !important',
    },
  },
};

const dialogWindow = css`
  display: flex;
  flex-direction: column;
  width: 400px;
  min-height: 200px;
`;

const subText = css`
  color: ${NeutralColors.gray130};
  font-size: 14px;
  font-weight: 400;
`;

interface ImportQnAFromUrlModalProps
  extends RouteComponentProps<{
    location: string;
  }> {
  dialogId: string;
  subscriptionKey?: string;
  onDismiss: () => void;
  onSubmit: (urls: string[]) => void;
}

const DialogTitle = () => {
  return (
    <div>
      {formatMessage('Populate your KB.')}
      <p>
        <span css={subText}>
          {formatMessage(
            'Extract question-and-answer pairs from an online FAQ, product manuals, or other files. Supported formats are .tsv, .pdf, .doc, .docx, .xlsx, containing questions and answers in sequence. '
          )}
          {/* <Link href={knowledgeBaseSourceUrl} target={'_blank'}>
            {formatMessage('Learn more about knowledge base sources. ')}
          </Link> */}
          {formatMessage(
            'Skip this step to add questions and answers manually after creation. The number of sources and file size you can add depends on the QnA service SKU you choose. '
          )}
          {/* <Link href={QnAMakerLearningUrl} target={'_blank'}>
            {formatMessage('Learn more about QnA Maker SKUs.')}
          </Link> */}
        </span>
      </p>
    </div>
  );
};

// const formConfig: FieldConfig<FormField> = {
//   urls: {
//     required: true,
//     defaultValue: [''],
//   },
// };

export const VirtualAssistantCreationModal: React.FC<ImportQnAFromUrlModalProps> = (props) => {
  const { onDismiss } = props;
  const [] = useState(['']);

  //   const { formData, updateField, hasErrors } = useForm(formConfig);
  //   const disabled = !isQnAFileselected || hasErrors || urlErrors.some((e) => !!e) || formData.urls.some((url) => !url);

  //   const addNewUrl = () => {
  //     const urls = [...formData.urls, ''];
  //     updateField('urls', urls);
  //     setUrlErrors(validateUrls(urls));
  //   };

  //   const updateUrl = (index: number, url = '') => {
  //     const urls = [...formData.urls];
  //     urls[index] = url;
  //     updateField('urls', urls);
  //     setUrlErrors(validateUrls(urls));
  //   };

  //   const removeUrl = (index: number) => {
  //     const urls = [...formData.urls];
  //     urls.splice(index, 1);
  //     updateField('urls', urls);
  //     setUrlErrors(validateUrls(urls));
  //   };

  return (
    <Dialog
      dialogContentProps={{
        type: DialogType.normal,
        title: <DialogTitle />,
        styles: styles.dialog,
      }}
      hidden={false}
      modalProps={{
        isBlocking: false,
        styles: styles.modal,
      }}
      onDismiss={onDismiss}
    >
      <div css={dialogWindow}>
        {/* <Stack>
          {formData.urls.map((l, index) => {
            return (
              <div key={index} css={urlContainer}>
                <TextField
                  data-testid={`knowledgeLocationTextField-${index}`}
                  errorMessage={urlErrors[index]}
                  label={index === 0 ? formatMessage('URL') : ''}
                  placeholder={'http://'}
                  styles={textField}
                  value={l}
                  onChange={(e, url) => updateUrl(index, url)}
                />
                {index !== 0 && (
                  <ActionButton
                    css={cancel}
                    data-testid={`deleteImportQnAUrl-${index}`}
                    hidden={index === 0}
                    iconProps={{ iconName: 'Cancel' }}
                    onClick={(e) => removeUrl(index)}
                  />
                )}
              </div>
            );
          })}
          <ActionButton
            css={actionButton}
            data-testid={'addQnAImportUrl'}
            iconProps={{ iconName: 'Add' }}
            onClick={addNewUrl}
          >
            {formatMessage('Add URL')}
          </ActionButton>
          {!isQnAFileselected && (
            <div css={warning}> {formatMessage('please select a specific qna file to import QnA')}</div>
          )}
        </Stack> */}
      </div>
      <DialogFooter>
        <DefaultButton
          data-testid={'createKnowledgeBaseFromScratch'}
          styles={{ root: { marginRight: 155 } }}
          text={formatMessage('Create knowledge base from scratch')}
          //   onClick={() => {
          //     if (hasErrors) {
          //       return;
          //     }
          //     onSubmit([]);
          //   }}
        />
        <DefaultButton text={formatMessage('Cancel')} onClick={onDismiss} />
        <PrimaryButton
          data-testid={'createKnowledgeBase'}
          //   disabled={disabled}
          text={formatMessage('Create knowledge base')}
          //   onClick={() => {
          //     if (hasErrors) {
          //       return;
          //     }
          //     onSubmit(formData.urls);
          //   }}
        />
      </DialogFooter>
    </Dialog>
  );
};

export default VirtualAssistantCreationModal;