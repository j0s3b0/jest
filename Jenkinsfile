pipeline {
    agent {
        docker {
            image 'node:8.11.1'
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
