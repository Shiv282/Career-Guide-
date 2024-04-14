import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


const steps = [
  {
    label: 'Introduction',
    description: `Here we test aptitude skills and Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
  },
    {
      label: 'IQ test',
      description: `Here we test aptitude skills and Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    },
    {
      label: 'Coding skills',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo asperiores fuga blanditiis tempor.',
    },
    {
      label: 'Choose skills',
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo facilis quo dolorum, `,
    },
    {
        label: 'Writing analysis',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo facilis quo dolorum`,
    },
    {
        label: 'Final analysis',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo facilis quo dolorum`,
    },
  ];

export default function ProgressBar({activeSection}){
    return (
        <Box className="bg-white px-5 py-9 rounded-lg" sx={{ maxWidth: 400 }}>
          <Stepper activeStep={ activeSection} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === 5 ? (
                      <Typography variant="caption">Last step</Typography>
                    ) : null
                  }
                >
                    <span className='font-black'>{step.label}</span>
                </StepLabel>
                <StepContent>
                  <Typography className='text-slate-900'>{step.description}</Typography>
                  <Box sx={{ mb: 2 }}>
                    
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          { activeSection === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>All steps completed - you&apos;re finished</Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </Box>
      );
}