pipeline {
    agent {
        docker {
            image 'node:7.8-slim' 
            args '-p 3000:3000'  
        }
    }
    environment { HOME="."
        CI = 'true' 
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install --save-dev jest' 
            }
        }
        stage('Testing with jest'){
          steps{
               sh './jenkins/script/test.sh'
          }
        }
    }
}
