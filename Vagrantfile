Vagrant.configure("2") do |config|

  config.vm.box = "ubuntu-14.04-20150506"
  config.vm.box_url = "https://cloud-images.ubuntu.com/vagrant/trusty/20150506/trusty-server-cloudimg-amd64-vagrant-disk1.box"

  config.ssh.insert_key = false

 $script = <<SCRIPT
curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -
sudo apt-get install -y git
sudo apt-get install -y nodejs
npm install -g mocha
npm install -g node-inspector/node-inspector
node-inspector &
mocha --debug-brk /vagrant/foo.test.js
SCRIPT

  config.vm.define :dev do |dev_config|
    dev_config.vm.network :public_network, :ip => '192.168.0.200'
    dev_config.vm.network :forwarded_port, guest: 8080, host: 8080
    dev_config.vm.network :forwarded_port, guest: 5858, host: 5858
    config.vm.provision "shell", inline: $script
  end
end
