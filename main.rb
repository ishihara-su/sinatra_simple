require 'sinatra'

get '/' do
  erb :index
end

post '/' do
  p params["ex_text"]
end

get '/hello' do
  "Hello world"
end

get '/example' do
  erb :example
end

not_found do
    "Not Found: The requested URL was not found on this server."
end
