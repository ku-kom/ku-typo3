<?php

namespace SaschaEnde\GridelementsBootstrap\ViewHelpers;

class CssViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper
{

    /**
     * Arguments initialization.
     *
     * @throws \TYPO3Fluid\Fluid\Core\ViewHelper\Exception
     * @throws \TYPO3\CMS\Fluid\Core\ViewHelper\Exception
     */
    public function initializeArguments()
    {
        $this->registerArgument(
            'css',
            'array',
            'Content element array'
        );
        $this->registerArgument(
            'as',
            'string',
            'Template variable name to assign; if not specified the ViewHelper returns the variable instead.'
        );
    }

    /**
     * @param mixed $css
     * @return string
     */
    public function render()
    {

        if ($this->templateVariableContainer->exists($this->arguments['as']) === TRUE) {
            $this->templateVariableContainer->remove($this->arguments['as']);
        }

        if(is_array($this->arguments['css'])){
            $parts = [];
            foreach($this->arguments['css'] as $cssArrElement){
               $parts = array_merge($parts,explode(',',$cssArrElement));
            }
        }else{
            $parts = explode(',',$this->arguments['css']);
        }
        $cssString = ' '.implode(" ",$parts).' ';

        $this->templateVariableContainer->add($this->arguments['as'], $cssString);
        $content = $this->renderChildren();

        if(!isset($this->arguments['as'])){
            return $cssString;
        }else{
            return $content;
        }


    }
}
