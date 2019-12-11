require 'json'

package = JSON.parse(File.read('package.json'))

Pod::Spec.new do |s|
  s.name                  = 'MegalabsTokens'
  s.version               = package['version']
  s.summary               = package['description']
  s.homepage              = package['homepage']
  s.author                = { 'Dmitry Borisenkov' => 'koorany@gmail.com' }

  # We grab the asset from unpkg, a CDN that hosts our NPM `dist` files. The `ios.zip` file
  # contains two files: `index.swift` and `LICENSE.txt`.
  s.source                = { :http => "https://unpkg.com/@megalabs/megalabs-tokens@#{s.version.to_s}/dist/ios.zip" }
  s.source_files          = 'MegalabsTokens.swift'
  s.license               = { :type => package['license'], :file => 'LICENSE.txt'  }

  s.swift_versions        = ['5.0']
  s.ios.deployment_target = '10.3'
end
